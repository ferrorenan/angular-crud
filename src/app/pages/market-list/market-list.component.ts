import { Component, OnInit } from '@angular/core';
import { delay, Observable, take } from 'rxjs';
import { animateListItems } from '../../animations/animations';
import { Card } from '../../models/card';
import { MarketService } from '../../services/market.service';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.scss'],
  animations: [
    animateListItems
  ]
})
export class MarketListComponent implements OnInit {

  movies$: Observable<Card[]>;

  typeOfActionManagerMarketList: 'insert' | 'edit' | 'delete';
  productData: Card;

  constructor(
      private _marketService: MarketService
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {

    this.movies$ = this._marketService.getMovies()
        .pipe(
            delay(2000),
        );
  }

/*  editMovies(productData: string): void {

    this.productData = productId;
  }*/

  getProductId(productId: Card): void {
    this.productData = productId;
  }
}
