import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FlightBookingModule } from './flight-booking/flight-booking.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,

    CoreModule,
    FlightBookingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    // { provide: FlightService, useClass: DummyFlightService }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
