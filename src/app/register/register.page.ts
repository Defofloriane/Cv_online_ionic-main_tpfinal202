import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name: string;
  email: string;
  phone: string;
  password: string;
  constructor(
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private loadingctrl: LoadingController,
    private toastr: ToastController
  ) { }

  ngOnInit() {
  }

  async register(){
    if(this.name && this.email && this.phone && this.password){
      //chargement en cours
      const loading = await this.loadingctrl.create({
            message: 'processing..',
            spinner: 'crescent',
            showBackdrop: true
      });
      loading.present();
      console.log('za');

      this.afauth.createUserWithEmailAndPassword(this.email,this.password)
      .then((data)=>{
        data.user.sendEmailVerification();
          this.afs.collection('user').doc(data.user.uid).set({
           ' userId': data.user.uid,
           ' userName':  this.name,
            ' userEmail': this.email,
            ' userPhone': this.phone,
            ' createAdt': Date.now()
          })
          .then(()=>{
            loading.dismiss();
            this.toast('Enregistremment Reussir','succes');
            this.router.navigate(['/login']);
          })
          .catch(error =>{
            // console.log(error);
            loading.dismiss();
            this.toast(error.message,'danger');
          });
      })
      .catch(error =>{
        loading.dismiss();
        this.toast(error.message,'danger');
        // alert('message:une ou des informations renseigneés sont deja présente,Allez vous loger merci!');
      });
    }else{
      this.toast('Svp completer le formulaire','warning');
      alert('Svp completez le formulaire');
    }
  }//fin register
  async toast(message,status){
    const toast = await this.toastr.create({
      message,
      color: status,
      position: 'top',

    });

  }
}
