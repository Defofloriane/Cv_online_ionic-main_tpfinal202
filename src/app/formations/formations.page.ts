import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Formation } from '../models/cv';
import { AllService } from '../services/all.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.page.html',
  styleUrls: ['./formations.page.scss'],
})
export class FormationsPage implements OnInit {
  constructor(private all: AllService) {}

  ngOnInit() {}

  //pour recuperer les valeurs saisr dans l input
  onSubmit(f: NgForm) {
    let val = f.value;
    this.all.cv.formation = [];
    this.all.cv.formation.push(
      new Formation(
        1,
        val.formation1,
        val.structure1,
        val.ville1,
        val.dateDebut1,
        val.dateFin1,
        val.description1
      )
    );
    this.all.cv.formation.push(
      new Formation(
        2,
        val.formation2,
        val.structure2,
        val.ville2,
        val.dateDebut2,
        val.dateFin2,
        val.description2
      )
    );
    f.reset();
  }
}
