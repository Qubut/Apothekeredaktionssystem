// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   endpoints:{
    graphql:"https://skb-virtuell.de:8080/graphql",
    meilisearch:"https://localhost:8081",
  },
  meilisearchKey:"XT1czWre917fb0ee7d5c6eb8184c79f173fcf9150f72d0ef24a203322e6a7f0b5e7e008b"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
