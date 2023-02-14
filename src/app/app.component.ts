import { Component, OnInit } from '@angular/core';
import {
  fader,
} from './animations/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
})
export class AppComponent implements OnInit{
  title = 'angular-crud';

  constructor(
  ) {}

  ngOnInit(): void {

    this.insertConsoleStylezation()
  }

  getState(outlet: any) {
    // Changing the activatedRouteData.state triggers the animation
    return outlet.activatedRouteData.state;
  }

  insertConsoleStylezation(): void {

    console.log('%c Renan Ferro !',
        `font-weight: bold; 
      padding: 2rem; 
      font-size: 50px; 
      color: #faca15; 
      text-shadow: 3px 3px 0 #e64980, 6px 6px 0 #31c48d, 9px 9px 0 #ff8a4c, 12px 12px 0 #3c1ba2;`);
  }
}
