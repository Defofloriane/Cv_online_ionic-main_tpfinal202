import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cv2Page } from './cv2.page';

const routes: Routes = [
  {
    path: '',
    component: Cv2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cv2PageRoutingModule {}
