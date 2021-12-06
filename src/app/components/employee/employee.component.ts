import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '@app/shared/models';
import { ActiveService } from '@app/shared/services/active.service';
import { EmployeeService } from '@app/shared/services/employee.service';
//import { ConsoleService } from '@ng-select/ng-select/lib/console.service';
//import { NgSelectModule, NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
  employeeForm: FormGroup;
  selectedEmployeeName = '';
  isDrop: boolean = false;

  constructor(private empService: EmployeeService, 
              private formBuilder: FormBuilder,
              private activeService: ActiveService) { }

  ngOnInit(): void {
    this.createForm();
    this.loadEmployee();
  }

  loadEmployee() {
    this.empService.getEmployees().subscribe(data => { 
      this.employees = data;
      this.optionSelected(this.employees[0])
    });
  }

  get employeeControl() {
    return this.employeeForm.get('employeeControl');
  }

  optionSelected(emp) {
    this.selectedEmployeeName = emp.EmployeeName;
    this.activeService.sendSelect(this.selectedEmployeeName);
    this.employeeControl.setValue(this.selectedEmployeeName, {
      onlySelf: true
    });
    this.isDrop = false;
  }

  /* onRobotEditClick(event, id) {
    console.log(event.target.value);
    console.log(id);
  } */

  clear(emp) {
    this.loadEmployee();
  }

  createForm() {
    this.employeeForm = this.formBuilder.group({
      employeeControl: [null, Validators.required]
    });
  }

}
