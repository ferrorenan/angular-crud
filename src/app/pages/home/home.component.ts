import { Component, OnInit } from '@angular/core';
import { Typography } from '../../models/typography';
import { catchError, delay, Observable, Subject } from 'rxjs';
import { User } from '../../models/user';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userData$?: Observable<User>;

  toDoList: Typography[] = [
    {
      title: 'Execute NPM Install',
    },
    {
      title: 'Execute ng serve',
    },
    {
      title: 'json-server --watch database.json',
    },
    {
      title: 'Click on the Button :D',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
