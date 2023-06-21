import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cibando-giugno';
  nome = 'Danilo';
  label = 'logo di cibando';

  percorso = '../assets/images/imageBg-';
  images = [
    { id: 1, label: 'Spaghetti al pomodoro' },
    // { id: 2, label: 'Tagliata di manzo' },
    // { id: 3, label: 'Tiramisù classico' },
  ];
}
