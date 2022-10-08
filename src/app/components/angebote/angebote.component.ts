import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-angebote',
  templateUrl: './angebote.component.html',
  styleUrls: ['./angebote.component.css'],
})
export class AngeboteComponent implements OnInit {
  angebote$ = new Observable<Angebot[]>();
  constructor(private apiService: ApiService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.angebote$ = this.apiService.getAngebote();
  }

  show(e: Hits) {
    (<Angebote[]>(<unknown>e)).forEach((d) => console.log(d));
  }
}
