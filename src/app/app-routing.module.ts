import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'folder',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'forgot-pass',
    loadChildren: () =>
      import('./forgot-pass/forgot-pass.module').then(
        (m) => m.ForgotPassPageModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
    //  canActivate: [AuthGuard]
  },
  {
    path: 'profil-edit',
    loadChildren: () =>
      import('./profil-edit/profil-edit.module').then(
        (m) => m.ProfilEditPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'change-pass',
    loadChildren: () =>
      import('./change-pass/change-pass.module').then(
        (m) => m.ChangePassPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '***',
    loadChildren: () =>
      import('./page-not-trouver/page-not-trouver.module').then(
        (m) => m.PageNotTrouverPageModule
      ),
  },
  {
    path: 'formations',
    loadChildren: () =>
      import('./formations/formations.module').then(
        (m) => m.FormationsPageModule
      ),
  },
  {
    path: 'experiences',
    loadChildren: () =>
      import('./experiences/experiences.module').then(
        (m) => m.ExperiencesPageModule
      ),
  },
  {
    path: 'langues',
    loadChildren: () =>
      import('./langues/langues.module').then((m) => m.LanguesPageModule),
  },
  {
    path: 'losirs',
    loadChildren: () =>
      import('./losirs/losirs.module').then((m) => m.LosirsPageModule),
  },
  {
    path: 'competences',
    loadChildren: () =>
      import('./competences/competences.module').then(
        (m) => m.CompetencesPageModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactPageModule),
  },
  {
    path: 'information-personnelles',
    loadChildren: () =>
      import('./information-personnelles/information-personnelles.module').then(
        (m) => m.InformationPersonnellesPageModule
      ),
  },
  {
    path: 'cvfinal',
    loadChildren: () =>
      import('./cvfinal/cvfinal.module').then((m) => m.CvfinalPageModule),
  },
  {
    path: 'cv1',
    loadChildren: () =>
      import('./modelesCv/cv1/cv1.module').then((m) => m.Cv1PageModule),
  },
  {
    path: 'cv2',
    loadChildren: () =>
      import('./modelesCv/cv2/cv2.module').then((m) => m.Cv2PageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
