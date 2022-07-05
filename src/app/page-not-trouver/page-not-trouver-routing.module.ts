import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotTrouverPage } from './page-not-trouver.page';

const routes: Routes = [
  {
    path: '',
    component: PageNotTrouverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageNotTrouverPageRoutingModule {}
