import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../app.tokens';
import { Flight } from '../entities/flight';
import { FlightService } from './flight.service';

@Injectable()
export class DefaultFlightService implements FlightService {

  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    const url = this.baseUrl + 'flight';

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    const headers = new HttpHeaders()
      .set('accept', 'application/json');

    return this.http
      .get<Flight[]>(url, { params, headers })
  }
}
