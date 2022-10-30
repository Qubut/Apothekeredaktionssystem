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
  stop=false
  data:Angebot[] =[]
  constructor(private apiService: ApiService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.angebote$ = this.apiService.getAngebote();
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.stop=true
    }, 1000);
  }

  show(e: Hits) {
   this.data = (<Angebot[]>(<unknown>e)).reverse()
  }
}
