import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }
  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Olá!',
      message: 'Seja bem vindo!',
      buttons: ['Ok']
    });
    alert.present()
  }
}
