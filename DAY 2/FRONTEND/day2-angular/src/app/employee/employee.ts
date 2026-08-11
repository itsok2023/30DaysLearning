import { Component } from '@angular/core';
import { CapitalizePipe } from '../pipes/capitalize-pipe';

@Component({
  selector: 'app-employee',
  imports: [CapitalizePipe],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  name = "Omkar";
  age = 32;

  image = "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"

  welcomeMessage(){
    alert("Welcome User...");
  }

  isActive = true;

  toggleStatus(){
    this.isActive = !this.isActive;
  }

  employees =
  [
    "Omkar",
    "Vinay",
    "Sarthak",
    "Shubham",
    "Amar"
  ]

  managers =
  [
    {
      name: "Omkar",
      age: 45,
       isActive: true
    },
    {
      name: "Vinay",
      age: 62,
       isActive: false
    },
    {
      name: "Sarthak",
      age: 68,
       isActive: true
    },
    {
      name: "Shubham",
      age: 26,
       isActive: false
    },
    {
      name: "Amar",
      age: 65,
       isActive: true
    }
  ]

  word = "hello india";
}
