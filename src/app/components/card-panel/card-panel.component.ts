import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-panel',
  templateUrl: './card-panel.component.html',
  styleUrls: ['./card-panel.component.scss']
})
export class CardPanelComponent implements OnInit {

  @Input() cardClass = '';

  constructor() { }

  ngOnInit(): void {
  }

}
