import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompetencesPageRoutingModule } from './competences-routing.module';

import { CompetencesPage } from './competences.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompetencesPageRoutingModule
  ],
  declarations: [CompetencesPage]
})
export class CompetencesPageModule {}
