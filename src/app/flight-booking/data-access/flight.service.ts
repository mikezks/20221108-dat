import { environment } from '../../../environments/environment';
import { DummyFlightService } from './dummy-flight.service';
import { DefaultFlightService } from './default-flight.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../../entities/flight';
import { BASE_URL } from '../../app.tokens';

@Injectable({
  providedIn: 'root',
  useFactory: (baseUrl: string, http: HttpClient) => {
    if (environment.useDummy) {
      return new DummyFlightService;
    }
    return new DefaultFlightService(baseUrl, http);
  },
  deps: [
    BASE_URL,
    HttpClient
  ]
})
export abstract class FlightService {

  abstract find(from: string, to: string): Observable<Flight[]>;

}
