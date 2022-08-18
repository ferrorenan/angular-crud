import { Component, Input, OnInit } from '@angular/core';
import { Link } from '../../models/link';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  @Input() linkProperties!: Link;
  @Input() classLink = 'd-block';

  constructor() { }

  ngOnInit(): void {
  }

}
