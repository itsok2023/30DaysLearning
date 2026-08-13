import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Employee } from './employee/employee';
import { EmployeeList } from './employee-list/employee-list';
import { EmployeeDetails } from './employee-details/employee-details';
import { authGuard } from './auth-guard';
import { Login } from './login/login';

export const routes: Routes = [

  {
    path: 'home',
    component: Home
  },

  {
    path: 'about',
    component: About
  },
  {
  path: 'admin',
  canActivate: [authGuard],
  loadComponent: () =>
    import('./admin/admin').then(m => m.Admin)
    },

  {
    path: 'employees',
    component: Employee,
    children: [
      {
        path: 'list',
        component: EmployeeList
      },
      {
        path: 'details',
        component: EmployeeDetails
      }
    ]
  },

  {
  path: 'login',
  component: Login
    }

];