import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city/city.pipe';


@NgModule({
  declarations: [
    CityPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CityPipe,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
