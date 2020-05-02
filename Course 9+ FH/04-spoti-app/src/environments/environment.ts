// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  spotifyConfig: {
    clientId: "c4f8d310a6c8469c9e9b1b17a81220e1",
    clientSecret: "55d277dfc89c46119e675684c75b0455",
    authUrl: "https://accounts.spotify.com/",
    apiUrl: "https://api.spotify.com/v1/",
    embedUrl: "https://open.spotify.com/embed?uri="
  },
  countryConfig: {
    apiUrl: "https://restcountries.eu/rest/v2/name/"
  },
  auth0Config: {
    domain: "lemz.auth0.com",
    clientId: "yakk3QrY9VSbu5SieYfxweFEqSL2WvJ1"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
