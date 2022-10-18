import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, share, shareReplay, Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import {delay} from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit,OnDestroy{
  data$ = new Observable<Data>();
  offen = false;
  loader$ = new Observable<boolean>();
  loading = true;
  loaderSub = new Subscription();
  constructor(private apiService: ApiService,private _loadingService:LoadingService) {}
  ngOnDestroy(): void {
    this.loaderSub.unsubscribe()
  }

  ngOnInit(): void {
    this.loader$= this._loadingService.loadingSub.pipe(delay(0))
    this.loaderSub = this.loader$.subscribe((loading)=>this.loading=loading)
    this.data$ = this.apiService.getData().pipe(shareReplay(1));
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
