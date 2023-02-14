import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  @Output() buttonAction = new EventEmitter<Card>();
  @Output() editEvent = new EventEmitter<Card>();

  constructor() { }

  ngOnInit(): void {

  }

  clickEditButton(productData: Card): void {

    this.editEvent.emit(productData);
  }

  emmitProductValue(productData: Card): void {

    this.buttonAction.emit(productData);
  }
}
