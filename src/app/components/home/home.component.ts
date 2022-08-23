import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  leistungen$ = new Observable<Leistung[]>();
  data$ = new Observable<Data>();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.leistungen$ = this.apiService.getLeistungen();
    this.data$ = this.apiService.getData();
  }
}
