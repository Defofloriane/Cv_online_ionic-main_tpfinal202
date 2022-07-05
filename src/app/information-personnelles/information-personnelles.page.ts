import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AllService } from '../services/all.service';

@Component({
  selector: 'app-information-personnelles',
  templateUrl: './information-personnelles.page.html',
  styleUrls: ['./information-personnelles.page.scss'],
})
export class InformationPersonnellesPage implements OnInit {
  constructor(private all: AllService) {}

  ngOnInit() {}
  //pour recuperer les valeurs saisr dans l input
  onSubmit(f: NgForm) {
    let val = f.value;
    this.all.cv.noms = val.nom;
    this.all.cv.prenoms = val.prenom;
    this.all.cv.adresse = val.adresse;
    this.all.cv.nationalite = val.nationalite;
    this.all.cv.dateNaissance = val.dateNaissance;
    this.all.cv.photo = val.photo;
    f.reset();
  }
}
