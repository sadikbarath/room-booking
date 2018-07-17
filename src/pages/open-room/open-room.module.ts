import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenRoomPage } from './open-room';

@NgModule({
  declarations: [
    OpenRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenRoomPage),
  ],
})
export class OpenRoomPageModule {}
