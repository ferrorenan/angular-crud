import { Component, Input, OnInit } from '@angular/core';
import { ButtonLink } from './models/button-link';

@Component({
  selector: 'app-default-button-link',
  templateUrl: './default-button-link.component.html',
  styleUrls: ['./default-button-link.component.scss']
})
export class DefaultButtonLinkComponent implements OnInit {

  @Input() buttonClass = '';
  @Input() buttonConfiguration: ButtonLink | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
