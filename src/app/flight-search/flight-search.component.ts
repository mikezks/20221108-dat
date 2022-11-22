import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  from: string = 'Hamburg';
  to = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  search(): void {
    const url = 'https://demo.angulararchitects.io/api/flight';

    const params = new HttpParams()
      .set('from', this.from)
      .set('to', this.to);

    const headers = new HttpHeaders()
      .set('accept', 'application/json');

    this.http
      .get<Flight[]>(url, { params, headers })
      .subscribe(
        flights => this.flights = flights
      );

    /* console.log({
      from: this.from,
      to: this.to
    }); */
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }
}




const persons = [
  {
    id: 1,
    firstname: 'Susi',
    lastname: 'Sorglos',
    regDate: new Date().toISOString()
  },
  {
    id: 2,
    firstname: 'Peter',
    lastname: 'Sorgenvoll',
    regDate: new Date().toISOString()
  }
];

const articles = [
  {
    id: 80100,
    title: 'WLAN Kabel',
    vendor: 'Dummy Inc',
    price: 10_000
  }
];

const purchases = [
  {
    userId: 1,
    articleID: 80100,
    amount: 3
  }
];

const viewModel = [
  {
    articleTitle: 'WLAN Kabel',
    person: 'Susi Sorglos',
    total: 30_000,
    details: {
      price: 10_000,
      amount: 3
    }
  },
  {
    articleTitle: 'WLAN Kabel',
    person: 'Peter Sorgenvoll',
    total: 50_000,
    details: {
      price: 10_000,
      amount: 5
    }
  }
]
