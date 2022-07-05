import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 email: string;
 password: string;
  constructor(
    private auth: AuthService,
    private toastr: ToastController,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  login(){
    if(this.email && this.password){
         this.auth.signIn(this.email,this.password);
        //  .then(()=>{
        //   // this.toast('Enregistremment Reussir','succes');
        //   this.router.navigate(['/forgot-pass']);
        // });
    }else{
      alert('svp entrer votre mail et password Erreur');
    }
  }

  async toast(message,status){
    const toast = await  this.toastr.create({
      message,
      color:status,
      position: 'top',
    });
    toast.present();
  }

}
