// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backend: 'http://ec2-3-9-176-49.eu-west-2.compute.amazonaws.com:1337',
  graphql: 'http://ec2-3-9-176-49.eu-west-2.compute.amazonaws.com:1337/graphql',
  meilisearch: 'ec2-3-9-176-49.eu-west-2.compute.amazonaws.com:7700',
  meilisearchKey: 'dc55a924c56420ae0bbcf8724311de46816aa623fdc90bc89',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
