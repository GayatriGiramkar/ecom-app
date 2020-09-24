// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false, 
  apiUrl : 'http://localhost:8084/',

  firebase:{
    apiKey: "AIzaSyCZyI797J4E51Pta6hD6uAzZhApMaJZe5E",
    authDomain: "ionic-app-ca6b5.firebaseapp.com",
    databaseURL: "https://ionic-app-ca6b5.firebaseio.com",
    projectId: "ionic-app-ca6b5",
    storageBucket: "ionic-app-ca6b5.appspot.com",
    messagingSenderId: "706672828542",
    appId: "1:706672828542:web:af6410e375d68700a7782f"
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
