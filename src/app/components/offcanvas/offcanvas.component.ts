import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { AlertService } from '../../services/alert.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Card } from '../../models/card';

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
      private _moviesService: MoviesService,
      private _alertService: AlertService,
      private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  submitFormValue(): void {

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

          this.insertNewProductToMarketList();
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
  }

  insertNewProductToMarketList(): void {

    this._moviesService.removeItemFromList(this.productData.id)
        .subscribe({
          error: ((error) => {
            this._alertService
                .showErrorFeedbackClient();
          }),
          complete: (() => {
            this._alertService
                .showFeedbackClient(
                    'Yeah, done!',
                    `The ${this.productData.name} was deleted from your market list!`,
                    'success',
                );
          })
        })
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
  }
}
