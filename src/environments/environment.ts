// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  backend: 'http://localhost:1337',
  graphql: 'http://localhost:1337/graphql',
  meilisearch: 'http://localhost:7700',
  meilisearchKey: 'dc55a924c56420ae0bbcf8724311de46816aa623fdc90bc89',
};
export const PROJECT_NAME='riem-apotheke'
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
