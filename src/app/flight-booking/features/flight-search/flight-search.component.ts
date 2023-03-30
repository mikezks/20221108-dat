import { FlightFilter } from './../../../entities/flight-filter';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../../../entities/flight';
import { FlightService } from '../../data-access/flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [/* {
    provide: FlightService,
    useClass: DefaultFlightService
  } */]
})
export class FlightSearchComponent implements OnInit {
  from: string = 'Hamburg';
  to = 'Graz';
  flights: Flight[] = [];
  basket: Record<number, boolean> = {
    3: true,
    5: true
  };

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  updateFilter(filter: FlightFilter): void {
    this.from = filter.from;
    this.to = filter.to;

    this.search();
  }

  search(): void {
    this.flightService
      .find(this.from, this.to)
      .subscribe(
        flights => this.flights = flights
      );
  }
}
