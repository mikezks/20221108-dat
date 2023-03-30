import { FlightFilter } from './../../../entities/flight-filter';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-flight-filter',
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.css']
})
export class FlightFilterComponent implements OnInit {
  @Input() from  = '';
  @Input() to  = '';
  @Output() searchTrigger = new EventEmitter<FlightFilter>();

  constructor() { }

  ngOnInit(): void {
  }

  triggerSearch(): void {
    this.searchTrigger.emit({
      from: this.from,
      to: this.to
    });
  }
}
