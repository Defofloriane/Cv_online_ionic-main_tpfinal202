import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Compte } from '../models/cv';
import { AllService } from '../services/all.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  compte: Compte[] = [];

  constructor(private all: AllService) {}

  ngOnInit() {}
  onSubmit(f: NgForm) {
    let val = f.value;
    this.all.cv.comptes = [];
    this.all.cv.profile = val.profile;
    this.all.cv.comptes.push(new Compte(1, val.compte1, val.lien1));
    this.all.cv.comptes.push(new Compte(2, val.compte2, val.lien2));
    f.reset();
  }
}
