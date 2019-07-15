// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl:"https://api.github.com/users/",
  apiKey:'?access_token=8ea19c51034d38357db07f6ca5e51745acea70f7',
  myApiUserUrl: "https://api.github.com/users/yareyaska?access_token=d5250069c5dd8749aa8f5e2601c0c3b1702f40d9",
  myApiRepoUrl: "https://api.github.com/users/yareyaska/repos?access_token=d5250069c5dd8749aa8f5e2601c0c3b1702f40d9",
  otherApiRepoUrl:"/repos?access_token=d5250069c5dd8749aa8f5e2601c0c3b1702f40d9"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.