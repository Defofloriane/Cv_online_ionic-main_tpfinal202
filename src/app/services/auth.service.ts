import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
// import * as firebase from 'firebase';
import * as firebase from 'firebase/compat/app';

import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;//observable programmation asynchrone et de gestion de plusieurs valeurs.
  user: User;

  constructor(
    private angularfirestore: AngularFirestore,
    private angularauth: AngularFireAuth,
    private router: Router,
    private loadingcontrole: LoadingController,
    private toasrt: ToastController

  ) {
    // Les pipes permettent de modifier la forme d'un contenu avant son affichage. Ils sont utilisés uniquement côté htm
    this.user$ = this.angularauth.authState
      .pipe(
        // switchMap retourner un Observable pour chacune des valeurs de l'Observable d'origine.
        switchMap(user => {
          if (user) {
            return this.angularfirestore.doc<User>(`user/${user.uid} `).valueChanges();
          } else {
            return of(null);
          }
        })
      );
  }//fin contructeur

  async signIn(email, password) {
    const loading = await this.loadingcontrole.create({
      message: ' Authentification..',
      spinner: 'crescent',
      showBackdrop: true
    });

    loading.present();

    this.angularauth.setPersistence(firebase.default.auth.Auth.Persistence.LOCAL).then(() => {
      this.angularauth.signInWithEmailAndPassword(email, password).then((data) => {
        if (!data.user.emailVerified) {
          loading.dismiss();
          this.toast('Svp verifier votre Email!', 'Erreur');
          this.angularauth.signOut();
        } else {
          loading.dismiss();
          this.router.navigate(['/folder']);
        }
      })
        .catch(error => {
          loading.dismiss();
          this.toast(error.message, 'Danger');
        });

      // .catch(error => {
      //   loading.dismiss();
      //   this.toast(error.message,'Danger');
      // });
    }
    );
  }//fin signIn

  async signOut() {
    const loading = await this.loadingcontrole.create({
      spinner: 'crescent',
      showBackdrop: true
    });
    loading.present();

    this.angularauth.signOut().then(() => {
      loading.dismiss();
      this.router.navigate([`/login`]);
    });
  }//fin signOut

  async toast(message, status) {
    const toast = await this.toasrt.create({
      //  message: message,
      message,
      color: status,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
}
