import {Component, ViewChild} from '@angular/core';
import {Nav} from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { ProfilePage } from "../pages/profile/profile";
import { SettingsPage } from "../pages/settings/settings";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:string = "LoginPage";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openHomePage() {
    this.nav.setRoot("HomePage");
  }

  openProfilePage() {
    this.nav.push("ProfilePage");
  }

  openSettingsPage() {
    this.nav.push("SettingsPage");
  }

  openLoginPage() {
    this.nav.setRoot("LoginPage");
  }

}

