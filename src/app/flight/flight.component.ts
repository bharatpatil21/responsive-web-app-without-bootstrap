import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { config } from '../config/config';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  flight: any = {};
  ngOnInit(): void {}
  constructor() {}
}
