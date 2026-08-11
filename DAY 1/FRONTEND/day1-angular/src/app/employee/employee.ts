import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Highlight } from '../Directives/highlight';


@Component({
  selector: 'app-employee',
  imports: [FormsModule, NgClass, Highlight],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  name = "Omkar";
  age = 21;

 

  imageUrl = "https://mamp.one/wp-content/uploads/2024/09/image-resources2.jpg";

   


  sayHello(){
    alert("Hello " + this.name);
  }

  company = "";

  isActive = false;

}
