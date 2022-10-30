import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  distinctUntilChanged,
  map,
  Observable,
  shareReplay,
} from 'rxjs';
@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  getMenus(): Observable<Item[]> {
    return this.httpClient.get<Menus>(`/api/menus?populate=*`).pipe(
      map((res) => res.data[0].items),distinctUntilChanged(),
      shareReplay(3)
    );
  }
  getLeistungen(): Observable<Leistung[]> {
    return this.httpClient.get<Leistungen>(`/api/leistungen`).pipe(
      map((res) => res.data),distinctUntilChanged(),
      shareReplay(1)
    );
  }
  getData(): Observable<Data> {
    return this.httpClient.get<DataObject>(`/api/datum?populate=*`).pipe(
      map((res) => res.data),distinctUntilChanged(),
      shareReplay(3)
    );
  }
  getJobs(): Observable<Job[]> {
    return this.httpClient.get<Jobs>(`/api/jobs?populate=*`).pipe(
      map((res) => res.data),distinctUntilChanged(),
      shareReplay(1)
    );
  }
  getHighlights(): Observable<Highlight[]> {
    return this.httpClient.get<Highlights>(`/api/highlights?populate=*`).pipe(
      map((res) => res.data),distinctUntilChanged(),
      shareReplay(1)
    );
  }

  getAngebote(): Observable<Angebot[]> {
    return this.httpClient.get<Angebote>(`/api/angebote?populate=*`).pipe(
      map((res) => res.data),distinctUntilChanged(),
      shareReplay(1)
    );
  }
  getImpressum(): Observable<Impressum> {
    return this.httpClient
      .get<Impressum>(`/api/impressum`)
      .pipe(distinctUntilChanged(), shareReplay(1));
  }
}
