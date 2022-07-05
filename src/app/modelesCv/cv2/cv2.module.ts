import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cv2PageRoutingModule } from './cv2-routing.module';

import { Cv2Page } from './cv2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cv2PageRoutingModule
  ],
  declarations: [Cv2Page]
})
export class Cv2PageModule {}
