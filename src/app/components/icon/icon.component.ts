import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() pathImage: string | undefined = '';
  @Input() imageClass = '';
  @Input() width = 50;
  @Input() height = 50;

  constructor() { }

  ngOnInit(): void {
  }

}
