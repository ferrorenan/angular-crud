import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Icon } from '../../models/icon';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

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
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
