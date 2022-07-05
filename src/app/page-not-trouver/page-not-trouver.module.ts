import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageNotTrouverPageRoutingModule } from './page-not-trouver-routing.module';

import { PageNotTrouverPage } from './page-not-trouver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageNotTrouverPageRoutingModule
  ],
  declarations: [PageNotTrouverPage]
})
export class PageNotTrouverPageModule {}
