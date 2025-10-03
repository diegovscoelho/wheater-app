import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('wheater-app');

  isDropdownOpen: boolean = false; 

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen; 
  }
}
