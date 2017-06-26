# FirebaseUI for web - Ionic demo

This is a demo [Ionic](http://ionicframework.com/docs/) project using [FirebaseUI-web](https://github.com/firebase/firebaseui-web).

## Firebase console configuration:

To properly configure your Firebase Project please follow all the
instructions from the *Set up Firebase Authentication for Cordova* section
at the following link:

[https://firebase.google.com/docs/auth/web/cordova](https://firebase.google.com/docs/auth/web/cordova)

### Configuring sign-in providers

To use FirebaseUI to authenticate users you first need to configure each
provider you want to use in their own developer app settings. Please read the
*Before you begin* section of Firebase Authentication at the following links:

- [Email and password](https://firebase.google.com/docs/auth/web/password-auth#before_you_begin)
- [Google](https://firebase.google.com/docs/auth/web/google-signin#before_you_begin)
- [Facebook](https://firebase.google.com/docs/auth/web/facebook-login#before_you_begin)
- [Twitter](https://firebase.google.com/docs/auth/web/twitter-login#before_you_begin)
- [Github](https://firebase.google.com/docs/auth/web/github-auth#before_you_begin)

### Note
Phone number is currently not supported for Ionic/Cordova environments.

## Run app locally:

```bash
$ npm install
$ ionic serve
```

### Note
`ionic lab` or `ionic serve --lab` does not work with FirebaseUI, you will
have to use `ionic serve` instead.

## Add FirebaseUI to your own Ionic project:

After setting up Firebase console as described above, please follow the next steps:

### Install `firebase` and `firebaseui` dependencies:

```bash
$ npm install firebase --save
$ npm install firebaseui --save
```

### Setup firebaseui css to be visible to the app:

- First the css file has to be copied to www/build folder during every build. 
For that you need to create file config/copy.config.js with the following code:

```javascript
module.exports = {
  copyFirebaseUiCss: {
    src: ['./node_modules/firebaseui/dist/firebaseui.css'],
    dest: '{{BUILD}}'
  }
}
```

- And add the following lines to your package.json:

```json
"config": {
  "ionic_copy": "./config/copy.config.js"
}
```

- Then add the following line to src/index.html

```HTML
<link href="build/firebaseui.css" rel="stylesheet">
```

### For android set launchMode to singleInstance

By adding the following line to config.xml:

```XML
<preference name="AndroidLaunchMode" value="singleInstance" />
```

This is needed for Google Provider because sometimes after authentication 
a new instance of the app is created resulting in never successfully
authenticating. The issue does not occur on iOS devices.

### Create FirebaseUIProvider

There should only be a single instance of firebaseui for the whole app,
so it is a good idea to create a provider and save the instance there:

```javascript
@Injectable()
export class FirebaseuiProvider {

  ui: any;

  constructor() {
    // Initialize the FirebaseUI Widget using Firebase.
    this.ui = new firebaseui.auth.AuthUI(firebase.auth());
  }

}
```

### Add FirebaseUI to any page you like

See example at `src/pages/login/login.ts`.
