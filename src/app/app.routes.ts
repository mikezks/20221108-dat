import { FlightEditComponent } from './flight-booking/features/flight-edit/flight-edit.component';
import { HomeComponent } from './core/home/home.component';
import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-booking/features/flight-search/flight-search.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'flight-edit',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'flight-edit',
        component: FlightEditComponent
    }
];
