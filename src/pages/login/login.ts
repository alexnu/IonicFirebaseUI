import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseuiProvider } from '../../providers/firebaseui/firebaseui';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public uiProvider: FirebaseuiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage')
    // The start method will wait until the DOM is loaded.
    this.uiProvider.ui.start('#firebaseui-auth-container', this.getUiConfig());
  }

  getUiConfig() {
    // FirebaseUI config.
    return {
      callbacks: {
        signInSuccess: (currentUser, credential, redirectUrl) => {
          // Do something.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return false;
        }
      },
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      { 
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID, 
        customParameters: { 
          // Forces account selection even when one account 
          // is available. 
          prompt: 'select_account' 
        } 
      },
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // firebase.auth.PhoneAuthProvider.PROVIDER_ID // not available for Ionic apps
      ],
      // Terms of service url.
      tosUrl: '<your-tos-url>'
    };
  }

}
