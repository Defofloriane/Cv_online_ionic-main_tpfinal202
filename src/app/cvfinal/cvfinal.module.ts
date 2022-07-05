import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvfinalPageRoutingModule } from './cvfinal-routing.module';

import { CvfinalPage } from './cvfinal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvfinalPageRoutingModule
  ],
  declarations: [CvfinalPage]
})
export class CvfinalPageModule {}
