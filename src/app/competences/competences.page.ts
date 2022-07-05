import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Competences } from '../models/cv';
import { AllService } from '../services/all.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.page.html',
  styleUrls: ['./competences.page.scss'],
})
export class CompetencesPage implements OnInit {
  constructor(private all: AllService) {}

  ngOnInit() {}

  //pour recuperer les valeurs saisr dans l input
  onSubmit(f: NgForm) {
    let val = f.value;
    this.all.cv.competences = [];
    this.all.cv.competences.push(
      new Competences(1, val.competence1, val.niveau1, val.categorie1)
    );
    this.all.cv.competences.push(
      new Competences(2, val.competence2, val.niveau2, val.categorie2)
    );
    f.reset();
  }
}
