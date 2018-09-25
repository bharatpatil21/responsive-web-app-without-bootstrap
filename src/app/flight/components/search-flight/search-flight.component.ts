import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  flight: any = {};
  constructor() { }
  isReturnFlight: boolean = false;
  ngOnInit() {
  }

  tabSelect(type) {
    this. isReturnFlight = type === 'oneway' ? false : true;
  }
}
