import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyB0qxCieE7-B0aM0m03qdoSomMk0xVG3dY",
      authDomain: "ionicfirebaseui.firebaseapp.com",
      databaseURL: "https://ionicfirebaseui.firebaseio.com",
      projectId: "ionicfirebaseui",
      storageBucket: "ionicfirebaseui.appspot.com",
      messagingSenderId: "281186760812"
    };
    firebase.initializeApp(config);

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

