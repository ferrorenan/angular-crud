import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent implements OnInit {

  @Input() rounterLink = '';
  @Input() icon = '';

  @Output() fabClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clickInsertElement(): void {

    this.fabClick.next('');
  }
}
