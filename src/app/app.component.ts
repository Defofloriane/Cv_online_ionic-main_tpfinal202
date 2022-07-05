import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Profil', url: '/folder/Profil', icon: 'person' },
    { title: 'Contact', url: '/folder/Contact', icon: 'people-outline' },
    { title: 'Comptes', url: '/folder/Comptes', icon: 'mail' },
    { title: 'Formations', url: '/folder/Formations', icon: '' },
    { title: 'Experience', url: '/folder/Experience', icon: '' },
    { title: 'Competences', url: '/folder/Competences', icon: 'heart' },
    { title: 'Langues et loisir', url: '/folder/Langues et Loisirs', icon: '' },
    { title: 'Commentaires', url: '/folder/Commentaires', icon: 'text' },
    { title: 'Cv Final', url: '/folder/Cv Final', icon: '' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router: Router,
    private menu: MenuController) {}

  openMenu(page) {
    this.router.navigate(['/'+page]);
    this.menu.close();
  }
}
