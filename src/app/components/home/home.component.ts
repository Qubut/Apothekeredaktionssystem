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
  offen = false;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.data$ = this.apiService.getData();
    this.istOffen();
  }
  istOffen() {
    let date = new Date(Date.now());
    let day = date.getDay();
    let hour = date.getHours() + date.getMinutes() / 60;
    let von = [8.5, 13.5];
    let bis = [12.5, 18];
    let sun = 6;
    let sat = 5;
    if (day != sat && day != sun) {
      if (
        von.some((start) => hour >= start) &&
        bis.some((end) => hour <= end)
      ) {
        this.offen = true;
      } else {
        this.offen = false;
      }
    } else if (day == sat) {
      if (hour >= von[0] && hour <= bis[0]) {
        this.offen = true;
      } else {
        this.offen = false;
      }
    } else {
      this.offen = false;
    }
  }
}
