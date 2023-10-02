import { Component, OnInit } from '@angular/core';
import { TaskdataService } from 'src/Services/taskdata.service';

@Component({
  selector: 'app-taskdata',
  templateUrl: './taskdata.component.html',
  styleUrls: ['./taskdata.component.css']
})
export class TaskdataComponent implements OnInit {

  tasks:any;
  name:string;
  complete:boolean;
  priority:number;
  constructor(private taskService: TaskdataService) { }

  ngOnInit() {
    this.getAllTasks();
    this.createTask();
  }

  createTask() {
    let alltask = {
      id: new Date().getTime(),
      name: 'shaurya',
    }

    this.taskService.create(alltask).subscribe(res => {
      console.log('todo create', res);
    })
  }


  getAllTasks(){
    this.taskService.getTaskdata().subscribe(res => {
      console.log("All Task Data -:",res);
      this.tasks = res;
      console.log("Tasks :",this.tasks);
    })
  }

  addTask(){
    let newTask = {
    name : this.name,
    complete: this.complete,
    priority: this.priority,
    }
    this.taskService.addTask(newTask).subscribe(response => {
      this.getAllTasks()
      // this.clearForm()
      // this.showForm = false;
    });
  }

}
