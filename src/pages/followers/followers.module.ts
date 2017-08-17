import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FollowersPage } from './followers';

@NgModule({
  declarations: [
    FollowersPage,
  ],
  imports: [
    IonicPageModule.forChild(FollowersPage),
  ],
  entryComponents: [
    FollowersPage
  ]
})
export class FollowersPageModule {}
