import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cv1Page } from './cv1.page';

const routes: Routes = [
  {
    path: '',
    component: Cv1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cv1PageRoutingModule {}
