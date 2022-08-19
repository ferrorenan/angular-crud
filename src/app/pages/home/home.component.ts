import { Component, OnInit } from '@angular/core';
import { Typography } from '../../models/typography';
import { catchError, delay, Observable, Subject } from 'rxjs';
import { User } from '../../models/user';
import { UserDataService } from '../../services/user-data.service';
import { Icon } from '../../models/icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userData$?: Observable<User>;

  toDoList: Icon[] = [
    {
      name: 'angular',
      title: 'Angular'
    },
    {
      name: 'typescript',
      title: 'Typescript'
    },
    {
      name: 'sass',
      title: 'Sass'
    },
    {
      name: 'rxjs',
      title: 'RxJs'
    },
    {
      name: 'ngrx',
      title: 'NgRx'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
