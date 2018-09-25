import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlightRoutingModule } from './flight-routing.module';
import { FlightComponent } from './flight.component';
import { HeaderComponent, SearchFlightComponent } from './components';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		FlightRoutingModule,
	],
	declarations: [FlightComponent, HeaderComponent, SearchFlightComponent],
	providers: [],
	entryComponents: []
})
export class FlightModule {
}
