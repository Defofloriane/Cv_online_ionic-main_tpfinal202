import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Experience } from '../models/cv';
import { AllService } from '../services/all.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.page.html',
  styleUrls: ['./experiences.page.scss'],
})
export class ExperiencesPage implements OnInit {
  constructor(private all: AllService) {}

  ngOnInit() {}

  //pour recuperer les valeurs saisr dans l input
  onSubmit(f: NgForm) {
    let val = f.value;
    this.all.cv.experiences = [];
    this.all.cv.experiences.push(
      new Experience(
        1,
        val.poste1,
        val.entreprise1,
        val.pays1,
        val.dateDebut1,
        val.dateFin1,
        val.description1
      )
    );
    this.all.cv.experiences.push(
      new Experience(
        2,
        val.poste2,
        val.entreprise2,
        val.pays2,
        val.dateDebut2,
        val.dateFin2,
        val.description2
      )
    );
    f.reset();
  }
}
