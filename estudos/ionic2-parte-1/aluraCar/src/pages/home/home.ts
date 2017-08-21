import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros;

   constructor(
     public navCtrl: NavController,
     private _http: Http) {

      this._http
        .get('https://aluracar.herokuapp.com/')
        .map(result => result.json())
        .toPromise()
        .then(data => this.carros = data);
  }
}
