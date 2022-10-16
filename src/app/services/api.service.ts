import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({ providedIn: 'root' })

export class ApiService {
  constructor(private httpClient: HttpClient) {}
  getMenus(): Observable<Item[]> {
    return this.httpClient
      .get(`${environment.backend}/api/menus?populate=*`)
      .pipe(
        map((res) => (<Menus>res).data[0].items),
        shareReplay(1)
      );
  }
  getLeistungen(): Observable<Leistung[]> {
    return this.httpClient.get(`${environment.backend}/api/leistungen`).pipe(
      map((res) => (<Leistungen>res).data),
      shareReplay(1)
    );
  }
  getData(): Observable<Data> {
    return this.httpClient.get(`${environment.backend}/api/datum`).pipe(
      map((res) => (<DataObject>res).data),
      shareReplay(1)
    );
  }
  getJobs():Observable<Job[]>{
    return this.httpClient.get(`${environment.backend}/api/jobs?populate=*`).pipe(
      map((res)=>(<Jobs>res).data),shareReplay(1)
    )
  }
  getHighlights():Observable<Highlight[]>{
    return this.httpClient.get(`${environment.backend}/api/highlights?populate=*`).pipe(
      map((res)=>(<Highlights>res).data),shareReplay(1)
    )
  }

  getAngebote():Observable<Angebot[]>{
    return this.httpClient.get(`${environment.backend}/api/angebote?populate=*`).pipe(
      map((res)=>(<Angebote>res).data),shareReplay(1)
    )
  }
  getSearch(query:string):Observable<any>{
    return this.httpClient.get(`${environment.backend}/api/fuzzy-search/search?query=${query}`)
  }
}