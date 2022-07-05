import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AllService } from '../services/all.service';
import { Loisirs } from '../models/cv';

@Component({
  selector: 'app-losirs',
  templateUrl: './losirs.page.html',
  styleUrls: ['./losirs.page.scss'],
})
export class LosirsPage implements OnInit {
  constructor(private all: AllService) {}

  ngOnInit() {}
  //pour recuperer les valeurs saisr dans l input
  onSubmit(f: NgForm) {
    let val = f.value;
    this.all.cv.loisirs = [];
    this.all.cv.loisirs.push(new Loisirs(1, val.loisir1));
    this.all.cv.loisirs.push(new Loisirs(2, val.loisir2));
    f.reset();
  }
}
