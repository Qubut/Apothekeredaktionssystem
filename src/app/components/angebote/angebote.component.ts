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
  angebots$ = [];
  constructor(private apiService: ApiService, private httpClient: HttpClient) {
    this.httpClient.get(`/api/angebote?populate=*`).subscribe((res: any) => {
      this.angebots$ = res.data;
      console.log(this.angebots$)
    });
  }

  ngOnInit(): void {  }

  show(e: Hits) {
    (<Angebots[]>(<unknown>e)).forEach((d)=>console.log(d));
  }
}
