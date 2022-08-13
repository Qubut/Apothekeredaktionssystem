import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs';
import { ResponseData, Menu, Item, AnyData } from '../../../__global';
@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  getMenus() {
    return this.httpClient.get(`/api/menus?populate=*`).pipe(
      map((res) =>
        (<ResponseData>res).data.flatMap((e: AnyData) =>
          (<Menu>e).attributes.items.data
            .map((el: { attributes: Item }) => el.attributes)
        )
      ),
      shareReplay(1)
    );
  }
}
