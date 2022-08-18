import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from '../../animations/route-animations';

@Component({
  selector: 'app-auth-area',
  templateUrl: './auth-area.component.html',
  styleUrls: ['./auth-area.component.scss'],
  animations: [
      fader
  ]
})
export class AuthAreaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
