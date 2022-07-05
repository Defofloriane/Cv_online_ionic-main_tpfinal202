import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

//firewbase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFiresAuthModule } from '@angular/fire/auth';
// import { AngularFireStorageModule } from '@angular/fire/storage';

//environnement
import { environment } from '../environments/environment.prod';

//auth service
import { AuthService } from './services/auth.service';

//auth gaurd(Les "Guards" permettent de contrôler l'accès à une "route)
import { AuthGuard } from './guards/auth.guard';
import { StatusBar } from '@capacitor/status-bar';


// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';



export const firebaseConfig = {
  apiKey: 'AIzaSyBZiTn-icVsjRRkvJvbhc-biEVckSjdlGg',
  authDomain: 'cvionic-9aa70.firebaseapp.com',
  projectId: 'cvionic-9aa70',
  storageBucket: 'cvionic-9aa70.appspot.com',
  messagingSenderId: '149267640894',
  appId: '1:149267640894:web:d3efbd0b1fa80792a6d76f',
  measurementId: 'G-N7SE6E8ZBE'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule

  ],
  providers: [
    AuthService,
    AuthGuard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
