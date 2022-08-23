import { Injectable } from '@angular/core';
import { MeiliSearch } from 'meilisearch';
import { debounceTime, distinctUntilChanged, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly meilieKey = environment.meilisearchKey;
  searchClient = new MeiliSearch({
    host: environment.endpoints.meilisearch,
    headers: {
      Authorization: `Bearer ${environment.meilisearchKey}`,
      'Content-Type': 'application/json',
    },
  });
  config = {
    indexName: 'angebot',
    searchClient: this.searchClient,
  };
  constructor() {}
  search(searchTerm: Observable<string>,isAussteller: boolean = false, offset=0) {
    return isAussteller
      ? searchTerm.pipe(
          debounceTime(400),
          distinctUntilChanged(),
          map((term) =>
            this.searchClient
              .index('aussteller')
              .search(term, { limit: 1000, filter: ``, offset })
          )
        )
      : searchTerm.pipe(
          debounceTime(400),
          distinctUntilChanged(),
          map((term) =>
            this.searchClient
              .index('stellenausschreibung')
              .search(term, { limit: 1000, filter: ``, offset })
          )
        );
  }
}
