import { Flight } from './../../../entities/flight';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnDestroy {
  @Input() item: Flight | undefined = {
      id: 999,
      from: 'NY',
      to: 'LA',
      date: '',
      delayed: false
    };
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit(): void {
    console.log('Flight Card INIT');
  }

  toggleSelection(): void {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
  ngOnDestroy(): void {
    console.log('Flight Card DESTROY');
  }
}
