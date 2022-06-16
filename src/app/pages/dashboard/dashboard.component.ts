import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { catchError, delay, Observable, Subject } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userData$: Observable<User> | undefined;
  userDataApiError$ = new Subject<boolean>();

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
