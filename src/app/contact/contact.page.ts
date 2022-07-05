import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../models/cv';
import { AllService } from '../services/all.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  constructor(private all: AllService) {}

  ngOnInit() {}
  //pour recuperer les valeurs saisr dans l input
  onSubmit(f: NgForm) {
    let val = f.value;
    this.all.cv.contacts.push(new Contact(1, val.numero1));
    this.all.cv.contacts.push(new Contact(2, val.numero2));
    f.reset();
  }
}
