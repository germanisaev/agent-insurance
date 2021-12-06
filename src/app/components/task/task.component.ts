import { Component, OnInit } from '@angular/core';
import { Task } from '@app/shared/models';
import { TaskService } from '@app/shared/services';
import { ActiveService } from '@app/shared/services/active.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[] = [];
  isSelected: boolean = false;
  
  collectionSize: number;
  currentRate = 8;
  public currentTask: number;

  page = 1;
  count = 0;
  tableSize = 10;
  tableSizes = [3, 5, 10, 15];
  

  tasks$: Observable<Task[]>;
  total$: Observable<number>;
  selected$: Observable<string>;
  total: number = 0;

  constructor(private taskService: TaskService, private activeService: ActiveService) {
    this.selected$ = this.activeService.getSelect();
    this.tasks$ = this.taskService.getTasks();
  }

  ngOnInit(): void {}

  public selectedTask(index: any) {
    this.currentTask = index;
  }

  isLess(taskDate: any) {
    const today = new Date();
    const distination = new Date(taskDate);
    

    let dd = today.getDate();
    let mm = (today.getMonth() + 1);
    let yyyy = today.getFullYear();
    let current = new Date(mm + '/' + dd + '/' + yyyy).getTime();
    
    
    let distdd = distination.getDate();
    let distmm = (distination.getMonth() + 1);
    let distyyyy = distination.getFullYear();
    let distcurrent = new Date(distmm + '/' + distdd + '/' + distyyyy).getTime();

    return (distcurrent - current) < 0;
  }

  onTableDataChange(event){
    this.page = event;
    this.tasks$ = this.taskService.getTasks();
  }  

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.tasks$ = this.taskService.getTasks();
  }  
}