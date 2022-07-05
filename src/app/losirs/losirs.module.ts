import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LosirsPageRoutingModule } from './losirs-routing.module';

import { LosirsPage } from './losirs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LosirsPageRoutingModule
  ],
  declarations: [LosirsPage]
})
export class LosirsPageModule {}
