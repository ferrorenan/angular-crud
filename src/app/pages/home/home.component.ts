import { Component, OnInit } from '@angular/core';
import { Link } from '../../models/link';

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

  constructor() { }

  ngOnInit(): void {
  }
}
