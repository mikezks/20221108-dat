import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),

    CoreModule,
    // FlightBookingModule
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
