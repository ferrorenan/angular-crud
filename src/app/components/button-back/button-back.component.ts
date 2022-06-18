import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-back',
  templateUrl: './button-back.component.html',
  styleUrls: ['./button-back.component.scss']
})
export class ButtonBackComponent implements OnInit {

  @Input() routerLink = '';

  constructor() { }

  ngOnInit(): void {
  }

}
