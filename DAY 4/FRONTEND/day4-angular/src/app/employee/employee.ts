import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [RouterOutlet],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {

  constructor(private route: ActivatedRoute) {}

  id = '';

  ngOnInit() {

  this.id = this.route.snapshot.paramMap.get('id') ?? '';

  }
}
