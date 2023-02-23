import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Card } from '../../models/card';
import { MarketService } from '../../services/market.service';
import { Store } from '@ngxs/store';
import { MarketListActions } from '../../store/actions/market-list.actions';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent implements OnInit {

  passWord = 'renanferro';

  @Input() managerType: 'insert' | 'edit' | 'delete';
  @Input() productData: Card;

  constructor(
      private _marketService: MarketService,
      private _alertService: AlertService,
      private _route: ActivatedRoute,
      private _store: Store
  ) {}

  ngOnInit(): void {}

  validatePasswordToDeleteItemFromMarketList(): void {

    Swal.fire({
      title: 'Insert the password to Remove',
      input: 'password',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Validate',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        if (login != this.passWord) {
          this._alertService
              .showErrorFeedbackClient();
        } else {
          this.deleteItemFromMarketList();
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
  }

  deleteItemFromMarketList(): void {

    this._store.dispatch(new MarketListActions.DeleteItemFromMarketList(this.productData.id));
  }

  closeOffcanvas(): void {

    if (this.managerType != 'delete') {
      return
    }

    const cardsProduct = document.querySelectorAll('.card-product');

    cardsProduct.forEach((cardsProduct: Element) => {
      cardsProduct.id === `product${this.productData.id}`
          ? cardsProduct.classList.add('card-deleted-animation')
          : null
    });

    this._store.dispatch(new MarketListActions.GetMarketList);
  }
}
