import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TreeModule } from 'angular-tree-component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DepartmentComponent } from './components/department/department.component';
import { TaskComponent } from './components/task/task.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeService } from './shared/services/employee.service';
import { DepartmentService } from './shared/services/department.service';

import { TaskService } from './shared/services';
import { ActiveService } from './shared/services/active.service';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { SearchService } from './shared/services/search.service';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DepartmentComponent,
    TaskComponent,
    EmployeeComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TreeModule.forRoot(),
    NgxPaginationModule,
    NgbModule
  ],
  providers: [
    EmployeeService,
    DepartmentService,
    TaskService,
    ActiveService,
    SearchService
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
