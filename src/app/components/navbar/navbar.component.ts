import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() pages: Item[] = [];
  navbarOpen=false
  constructor() {}
  
  ngOnInit(): void {}
 
}
