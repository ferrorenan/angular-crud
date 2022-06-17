import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure-container',
  templateUrl: './structure-container.component.html',
  styleUrls: ['./structure-container.component.scss']
})
export class StructureContainerComponent implements OnInit {

  @Input() additionalRowClass = 'justify-content-lg-center';

  constructor() { }

  ngOnInit(): void {
  }

}
