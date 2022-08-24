import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alert = Swal.mixin({
    customClass: {
      confirmButton: 'ms-1 px-lg-2 text-white btn btn-success',
      cancelButton: 'text-white btn btn-danger'
    },
    buttonsStyling: false
  });

  constructor(
      private _router: Router
  ) { }

  alertWithConfirmation(
      title: string,
      description?: string,
      icon?: SweetAlertIcon,

  ): void {

    this.alert.fire({
      title: title,
      text: description,
      icon: icon,
      showCancelButton: true,
      confirmButtonText: 'Sim!',
      cancelButtonText: 'Não, voltar para lista',
      reverseButtons: true
    }).then((result) => {
      if (result.dismiss) {
        this._router.navigate(['dashboard/movies']);
      }
    })
  }
}
