import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-emp',
  imports: [FormsModule],
  templateUrl: './emp.html',
  styleUrl: './emp.css',
})
export class Emp {
  // Local Variables
  empId = 0;
  empName = '';
  
  // JSON Object Manually with dummy data
  employees = [
    {
      empId : 1,
      empName : "Omkar"
    },
    {
      empId : 2,
      empName : "Sagar"
    }
  ];

  // Function -> inbuilt push 
  addEmployee(){
    this.employees.push({
      empId: this.empId,
      empName: this.empName
    });

    // local variable empty
    this.empId = 0;
    this.empName='';

  }


}
