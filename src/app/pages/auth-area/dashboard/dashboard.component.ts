import { Component, OnInit } from '@angular/core';
import { catchError, delay, Observable, Subject } from 'rxjs';
import { User } from '../../../models/user';
import {
  ButtonLink
} from '../../../components/default-button-link/models/button-link';
import { UserDataService } from '../../../services/user-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userData$: Observable<User> | undefined;
  userDataApiError$ = new Subject<boolean>();

  buttonsToNavigate: ButtonLink[] = [
    {
      linkButton: 'dashboard/lista',
      buttonDescription: 'movies',
      isRouterLink: true
    },
    {
      linkButton: 'courses',
      buttonDescription: 'Courses',
      isRouterLink: false
    }
  ]

  constructor(
      private getUserDataService: UserDataService
  ) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {

    this.userData$ =
        this.getUserDataService
            .getUserData()
            .pipe(
                delay(5000),
                catchError((error) => {
                  this.userDataApiError$.next(true);
                  throw error;
                })
            );
  }
}
