import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RelicsPage } from './relics';

@NgModule({
  declarations: [
    RelicsPage,
  ],
  imports: [
    IonicPageModule.forChild(RelicsPage),
  ],
  entryComponents: [
    RelicsPage
  ]
})
export class RelicsPageModule {}
