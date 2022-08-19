import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item, Leistung, Data } from '__global';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'RiemApotheke';
  menu$ = new Observable<Item[]>();
  data$ = new Observable<Data>();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.menu$ = this.apiService.getMenus();
    this.data$ = this.apiService.getData()
  }
}
