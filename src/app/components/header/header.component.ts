import { Component, OnInit } from '@angular/core';
import { Link } from '../../models/link';
import { MarketListStates } from '../../store/state/market-list.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Card } from '../../models/card';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Select(MarketListStates.getMarketList) marketList$: Observable<Card[]>;

  headerLinks: Link[] = [
    {
      link: '',
      title: 'Home',
    },
    {
      link: 'about',
      title: 'About',
    },
    {
      link: 'market-list',
      title: 'Market List',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
