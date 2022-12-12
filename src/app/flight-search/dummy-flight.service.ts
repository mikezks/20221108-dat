import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../entities/flight';
import { FlightService } from './flight.service';

@Injectable({
  providedIn: 'root'
})
export class DummyFlightService implements FlightService {

  constructor() { }

  find(from: string, to: string): Observable<Flight[]> {
    return of([
      {
        id: 999,
        from: 'London',
        to: 'New York',
        date: new Date().toISOString(),
        delayed: false
      }
    ]);
  }
}
