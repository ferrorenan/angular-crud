import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  @Output() editEvent = new EventEmitter<string>();
  @Output() buttonAction = new EventEmitter<Card>();

  constructor() { }

  ngOnInit(): void {

  }

  clickEditButton(idMovie?: string): void {

    this.editEvent.emit(idMovie);
  }

  emmitProductValue(productData: Card): void {

    this.buttonAction.emit(productData);
  }
}
