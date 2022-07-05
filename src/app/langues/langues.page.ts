import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Langues } from '../models/cv';
import { AllService } from '../services/all.service';

@Component({
  selector: 'app-langues',
  templateUrl: './langues.page.html',
  styleUrls: ['./langues.page.scss'],
})
export class LanguesPage implements OnInit {
  constructor(private all: AllService) {}

  ngOnInit() {}
  //pour recuperer les valeurs saisr dans l input
  onSubmit(f: NgForm) {
    let val = f.value;
    this.all.cv.langues = [];
    this.all.cv.langues.push(new Langues(1, val.langue1, val.niveau1));
    this.all.cv.langues.push(new Langues(2, val.langue2, val.niveau2));
    f.reset();
  }
}
