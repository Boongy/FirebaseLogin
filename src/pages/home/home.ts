import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth} from "angularfire2/auth"
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import {Profile} from "../../models/profile";
import {StorePage} from "../store/store";
import {AccountDetails} from "../../models/AccountDetails";

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  profileData: FirebaseObjectObservable<Profile>;

  databaseRef$: FirebaseListObservable<AccountDetails>;

  details = {} as AccountDetails;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, private toast: ToastController,
              public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid) {
        this.toast.create({
            message: 'Welcome to Boongy And Buds, ' + data.email,
            duration:1000
      }).present();
        this.profileData = this.afDatabase.object('profile/'+data.uid);
      }
      else{

        this.navCtrl.push("LoginPage");

        this.toast.create({
          message: 'Could not find authentication details',
          duration:1000
        }).present();
      }
    });

  }


  buttonClicked() {
    this.navCtrl.push("StorePage");
  }

  submitDetails(ammount, heroName) {

    this.details.balance = ammount;
    this.details.heroName = heroName;

    this.afAuth.authState.take(1).subscribe(auth =>{
      this.afDatabase.object('AccountDetails/'+auth.uid).set(this.details)
    });
  }

}
