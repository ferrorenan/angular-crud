import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-content',
  templateUrl: './panel-content.component.html',
  styleUrls: ['./panel-content.component.scss']
})
export class PanelContentComponent implements OnInit {

  @Input() class: string;

  constructor() { }

  ngOnInit(): void {
  }

}
