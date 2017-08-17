import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {GearPage} from "./gear";

@NgModule({
  declarations: [
    GearPage
  ],
  imports: [
    IonicPageModule.forChild(GearPage)
  ],
  entryComponents: [
    GearPage
  ]
})
export class GearPageModule {}
