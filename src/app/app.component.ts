import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ApiService } from './services/api.service';
import { LoadingService } from './services/loading.service';
import {delay} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'RiemApotheke';
  menu$ = new Observable<Item[]>();
  data$ = new Observable<Data>();
  loader$ = new Observable<boolean>();
  loading = true;
  loaderSub = new Subscription()
  constructor(private _apiService: ApiService,private _loadingService:LoadingService) { }

  ngOnInit(): void {
    this.menu$ = this._apiService.getMenus();
    this.data$ = this._apiService.getData()
    this.loader$= this._loadingService.loadingSub.pipe(delay(0))
    this.loaderSub = this.loader$.subscribe((loading)=>this.loading=loading)
    // setTimeout( () => {
    //     var loaderHtml: any = document.getElementById('preloader');
    //     loaderHtml.style.display='none';
    // }, 1000);
  }
  ngOnDestroy():void{
    this.loaderSub.unsubscribe()
  }
}
