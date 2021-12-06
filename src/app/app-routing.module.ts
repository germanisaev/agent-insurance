import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    /*
    children: [
      { path: '', redirectTo: 'tasks', pathMatch: 'full' },
      { path: 'tasks', component: TaskComponent },
      { path: 'task/:id', component: TaskComponent },
      { path: 'employees', component: EmployeeComponent },
      { path: 'employee/:id', component: EmployeeComponent },
      { path: 'departments', component: DepartmentComponent },
      { path: 'department/:id', component: DepartmentComponent }
    ],
    */
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
