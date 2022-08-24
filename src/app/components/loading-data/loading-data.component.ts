import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-data',
  templateUrl: './loading-data.component.html',
  styleUrls: ['./loading-data.component.scss']
})
export class LoadingDataComponent implements OnInit {

  @Input() loadingDescription: string = 'Wait a second, we are getting all data!';

  constructor() { }

  ngOnInit(): void {
  }

}
