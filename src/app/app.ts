import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UnitsDropdown } from './units-dropdown/units-dropdown';
import { HourlyForecast } from './hourly-forecast/hourly-forecast';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, UnitsDropdown, HourlyForecast], 
    templateUrl: './app.html',
    styleUrl: './app.css'
})

export class App {
    protected readonly title = signal('wheater-app');
    
    isDropdownOpen: boolean = false; 

    currentUnits: UnitSelections = {
        temperature: 'celsius', 
        wind: 'kmh',            
        precipitation: 'mm'     
    };

    handleUnitsChange(newUnits: UnitSelections) {
        this.currentUnits = newUnits;
    }

    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }
}