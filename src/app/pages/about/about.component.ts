import { Component } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  projectTecnologies: Card[] = [
    {
      id: 'angular',
    },
    {
      id: 'typescript',
    },
    {
      id: 'bootstrap',
    },
    {
      id: 'git',
    },
    {
      id: 'sass',
    },
    {
      id: 'rxjs',
    },
    {
      id: 'ngrx',
    },
    {
      id: 'github',
    },
  ];

  publishData: Card[] = [
    {
      id: 'vercel',
    },
  ];

  constructor() { }
}
