import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public rooms: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37];

  constructor(
    public navCtrl: NavController,
  ) {

  }
  openRoom(roomNumber) {
    if (roomNumber == 2) {
      this.navCtrl.push('CustomerRegisterPage');
    }
    else {
      this.navCtrl.push('OpenRoomPage');
    }

  }

}
