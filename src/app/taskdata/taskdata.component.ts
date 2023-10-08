import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
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
  id : any;
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
    this.createTask();
    this.deleteTask(this.id);
    this.selectTask(this.tasks);
    this.updateTask(this.id);
    this.clearForm();
    this.searchByName();
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
    //_id : new Date().getFullYear(), 
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
    this.id = null
    this.name = null
    this.complete = null
    this.priority = null
  }

  updateTask(id){
    let editTask = {
    name : this.name,
    complete: this.complete,
    priority: this.priority,
    }
    this.taskService.updateTask(id,editTask).subscribe(response => {
      //response = this.getAllTasks();
      console.log('Updated task :',response);
    });
  }

  displayShowform() {
    //this.showForm = true;
  }

  selectTask(task){
    this.id = task.id;
    this.name = task.name;
    this.complete = task.complete;
    this.priority = task.priority;

  }

  deleteTask(id) {
    if(confirm('Are you sure you want to delete this task?')){
      this.taskService.deleteTask(id).subscribe(resp => {
       // resp = this.getAllTasks();
        console.log('After Delete task :',resp);
      });
    }
  }


  searchByName(){
    this.taskService.searchbyName(this.namequery).subscribe((namedata:any) => {
      this.nameData = namedata.namequery.searchbyName;
      console.log('Search Method :',this.nameData);
      console.log('namequery',namedata.namequery.searchbyName);
    });
  }
}
