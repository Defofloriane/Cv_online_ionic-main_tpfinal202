import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LosirsPage } from './losirs.page';

const routes: Routes = [
  {
    path: '',
    component: LosirsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LosirsPageRoutingModule {}
