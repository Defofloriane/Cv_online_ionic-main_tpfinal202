import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvfinalPage } from './cvfinal.page';

// import { cv2 } from './modelesCv/cv2';
// import { cv1 } from './modelesCv/cv1';

const routes: Routes = [
  {
    path: '',
    component: CvfinalPage,
  },
  // {
  //   path: 'cv1',
  //   loadChildren: () =>
  //     import('./modelesCv/cv1/cv1.module').then((m) => m.Cv1PageModule),
  // },
  // {
  //   path: 'cv2',
  //   loadChildren: () =>
  //     import('./modelesCv/cv2/cv2.module').then((m) => m.Cv2PageModule),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvfinalPageRoutingModule {}
