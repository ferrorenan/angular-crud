import { Component } from '@angular/core';
import { Card } from '../../models/card';
import { Meta } from '@angular/platform-browser';

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

  constructor(
      private _metaManager: Meta
  ) { }

  ngOnInit(): void {
    this.updateMetaDescription();
  }

  updateMetaDescription(): void {

    this._metaManager.updateTag({
      name: 'description',
      content: 'A simple Angular CRUD Application to manage your shopping list!'
    });
  }
}
