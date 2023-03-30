import { Component, OnInit } from '@angular/core';
import { Link } from '../../models/link';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  buttonsToNavigate: Link[] = [
    {
      link: 'market-list',
      title: 'market list',
    },
    {
      link: 'about',
      title: 'about',
    }
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
      content: 'Angular CRUD - Homepage'
    });
  }
}
