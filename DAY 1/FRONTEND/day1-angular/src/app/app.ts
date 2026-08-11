import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee/employee';
import { Emp } from './emp/emp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Employee, Emp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day1-angular');
}
