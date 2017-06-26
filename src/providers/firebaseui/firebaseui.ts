import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

/*
  Generated class for the FirebaseuiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FirebaseuiProvider {

  ui: firebaseui.auth.AuthUI;

  constructor() {
    console.log('Hello FirebaseuiProvider Provider');

    // Initialize the FirebaseUI Widget using Firebase.
    this.ui = new firebaseui.auth.AuthUI(firebase.auth());
  }

}
