import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../services/employee';

@Component({
  selector: 'app-employees',
  imports: [],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class Employees implements OnInit {

  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    console.log('Employees component loaded');

    this.employeeService.getEmployees().subscribe({

      next: (data) => {

        console.log('API DATA:', data);

        this.employees = data;

        console.log('Employees:', this.employees);

        this.cdr.markForCheck();
      },

      error: (error) => {
        console.error('API ERROR:', error);
      }

    });

  }
}