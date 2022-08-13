import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Item } from '__global';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  pages = new Observable<Item[]>();
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.pages = this.apiService.getMenus();
  }
}
