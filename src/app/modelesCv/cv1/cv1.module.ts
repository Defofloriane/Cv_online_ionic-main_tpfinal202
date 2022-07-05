import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cv1PageRoutingModule } from './cv1-routing.module';

import { Cv1Page } from './cv1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cv1PageRoutingModule
  ],
  declarations: [Cv1Page]
})
export class Cv1PageModule {}
