import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';

@Injectable({
  providedIn: 'root'
})
export class AllService {
  cv = new Cv();
  constructor() {
   }
}

