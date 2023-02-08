import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card!: Card;

  @Output() editEvent = new EventEmitter<string>();
  @Output() deleteButton = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clickEditButton(idMovie?: string): void {

    this.editEvent.emit(idMovie);
  }

  clickDeleteButton(idProduct: string): void {

    this.deleteButton.emit(idProduct);
  }
}
