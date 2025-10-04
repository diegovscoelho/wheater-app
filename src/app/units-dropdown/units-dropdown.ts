import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
    selector: 'app-units-dropdown',
    imports: [CommonModule], 
    templateUrl: './units-dropdown.html',
    styleUrls: ['./units-dropdown.css'],
    standalone: true
})

export class UnitsDropdown {
    isDropdownOpen: boolean = false; 

    selectedUnits: UnitSelections = {
        temperature: 'celsius', 
        wind: 'kmh',            
        precipitation: 'mm'     
    };

    @Output() unitsChange = new EventEmitter<UnitSelections>();

    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen; 
    }

    selectOption(section: keyof UnitSelections, value: string) {
        this.selectedUnits = {
            ...this.selectedUnits,
            [section]: value
        };
        
        this.unitsChange.emit(this.selectedUnits);
    }
}