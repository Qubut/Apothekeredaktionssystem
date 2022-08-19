import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs';
import {
  ResponseData,
  ResponseData2,
  Menu,
  Item,
  AnyData,
  Leistungen,
  Data
} from '../../../__global';
@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private httpClient: HttpClient) { }
  getMenus() {
    return this.httpClient.get(`/api/menus?populate=*`).pipe(
      map((res) =>
        (<ResponseData>res).data.flatMap((e: AnyData) =>
          (<Menu>e).attributes.items.data.map(
            (el: { attributes: Item }) => el.attributes
          )
        )
      ),
      shareReplay(1)
    );
  }
  getLeistungen() {
    return this.httpClient
      .get(`/api/leistungs`)
      .pipe(
        map((res) =>
          (<ResponseData>res).data.map(
            (e: AnyData) => (<Leistungen>e).attributes
          )
        ), shareReplay(1)
      );
  }
  getData() {
    return this.httpClient.get('/api/datum').pipe(
      map((res) => <Data>(<ResponseData2>res).data.attributes),
      shareReplay(1))
  }
}
