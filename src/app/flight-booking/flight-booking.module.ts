import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './features/flight-search/flight-search.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FlightSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FlightBookingModule { }
