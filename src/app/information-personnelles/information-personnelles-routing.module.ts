import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationPersonnellesPage } from './information-personnelles.page';

const routes: Routes = [
  {
    path: '',
    component: InformationPersonnellesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationPersonnellesPageRoutingModule {}
