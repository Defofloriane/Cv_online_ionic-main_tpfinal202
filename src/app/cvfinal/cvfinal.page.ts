import { Component, OnInit } from '@angular/core';
import { Cv } from '../models/cv';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController } from '@ionic/angular';
import { AllService } from '../services/all.service';

@Component({
  selector: 'app-cvfinal',
  templateUrl: './cvfinal.page.html',
  styleUrls: ['./cvfinal.page.scss'],
})
export class CvfinalPage implements OnInit {

  cv:Cv;
  constructor(
    private store: AngularFirestore,
    public loadingController:LoadingController,
    private all:AllService
    ) {
      this.cv = all.cv;
  }

  ngOnInit() {
    console.log(this.cv)
  }

  async upload () {
    const loading = await this.loadingController.create({
      message: 'Traitement en cours',
      duration: null
    });
    await loading.present();
    this.store.collection("Cv").doc('floriane').set({
      client: JSON.stringify(this.cv),
    }).then(
      ()=>{
        loading.dismiss()
      },
      (e)=>{
        console.log(e.toString())
      }
    );
  }

  getdata() {
    this.store.collection('Cv').doc("floriane").valueChanges().subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }
}
