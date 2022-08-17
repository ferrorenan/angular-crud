import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card | undefined;

  @Output() editEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clickEditButton(idMovie?: string): void {

    this.editEvent.emit(idMovie);
  }
}