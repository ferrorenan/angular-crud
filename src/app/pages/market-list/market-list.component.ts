import { Component, OnInit } from '@angular/core';
import { delay, Observable, take } from 'rxjs';
import { animateListItems } from '../../animations/animations';
import { Card } from '../../models/card';
import { MarketService } from '../../services/market.service';
import { Select } from '@ngxs/store';
import { MarketListStates } from '../../store/state/market-list.state';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.scss'],
  animations: [
    animateListItems
  ]
})
export class MarketListComponent implements OnInit {

  typeOfActionManagerMarketList: 'insert' | 'edit' | 'delete';
  productData: Card;

  @Select(MarketListStates.getMarketList) marketList$: Observable<Card[]>;
  @Select(MarketListStates.isLoading) isLoaded$: Observable<boolean>;

  constructor(
      private _marketService: MarketService,
      private _metaManager: Meta
  ) { }

  ngOnInit() {

    this.updateMetaDescription();
  }

  getProductId(productId: Card): void {
    this.productData = productId;
  }

  updateMetaDescription(): void {

    this._metaManager.updateTag({
      name: 'description',
      content: 'A new way to manage your Market List!'
    });
  }
}
