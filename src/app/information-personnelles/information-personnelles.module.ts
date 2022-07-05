import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationPersonnellesPageRoutingModule } from './information-personnelles-routing.module';

import { InformationPersonnellesPage } from './information-personnelles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationPersonnellesPageRoutingModule
  ],
  declarations: [InformationPersonnellesPage]
})
export class InformationPersonnellesPageModule {}
