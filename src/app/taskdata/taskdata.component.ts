import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TaskdataService } from 'src/Services/taskdata.service';

@Component({
  selector: 'app-taskdata',
  templateUrl: './taskdata.component.html',
  styleUrls: ['./taskdata.component.css']
})
export class TaskdataComponent implements OnInit {

  tasks:any;
  _id : any;
  name: any;
  complete:boolean;
  priority:number;
  namequery : '';
  nameData : [];

  //showForm: any = FormGroup ;
  constructor(private taskService: TaskdataService) { }

  ngOnInit() {
    //this.showForm = false;
    this.getAllTasks();
    this.addTask();
    //this.createTask();
    this.updateTask();
    this.deleteTask(this._id);
    this.clearForm();
    this.selectTask(this.tasks);
    this.searchByName();
  }

  // createTask() {
  //   let alltask = {
  //     id: new Date().getTime(),
  //     name: 'shaurya',
  //   }

  //   this.taskService.create(alltask).subscribe(res => {
  //     console.log('todo create', res);
  //   })
  // }


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
      this.getAllTasks();
      console.log('Add task:',response);
      //this.showForm = false;
    });
  }

  clearForm() {
    this._id = null
    this.name = null
    this.complete = null
    this.priority = null
  }

  deleteTask(_id) {
    if(confirm('Are you sure you want to delete this task?')){
      this.taskService.deleteTask(_id).subscribe(resp => {
        resp = this.getAllTasks();
        console.log('Delete task :',resp);
      });
    }
  }

  updateTask(){
    let editTask = {
      _id: this._id,
    name : this.name,
    complete: this.complete,
    priority: this.priority,
    }
    this.taskService.updateTask(editTask).subscribe(response => {
      response = this.getAllTasks()
      this.clearForm()
      //this.showForm = false;
      console.log('Update task :',response);
    });
  }

  displayShowform() {
    //this.showForm = true;
  }

  selectTask(task){
    this._id = task._id;
    this.name = task.name;
    this.complete = task.complete;
    this.priority = task.priority;

  }


  searchByName(){
    this.taskService.searchbyName(this.namequery).subscribe((namedata:any) => {
      this.nameData = namedata.namequery.searchbyName;
      console.log('Search Method :',this.nameData);
      console.log('namequery',namedata.namequery.searchbyName);
    });
  }
}
