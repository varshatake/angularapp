import { Component, OnInit } from '@angular/core';
import { Itcourses } from '../models/ngforAssignment';

@Component({
  selector: 'app-ngforassignment',
  templateUrl: './ngforassignment.component.html',
  styleUrls: ['./ngforassignment.component.css']
})
export class NgforassignmentComponent implements OnInit {

  titleofcourse : string = "Top 3 courses are as Follows :";
  differentCourses : Itcourses[]= [
    {studId : '101', studName : 'Harry', ITCourse : 'Automobile', MBA : 'HR'},
    {studId : '102', studName : 'Jenny', ITCourse : 'Electronics & Telecommunication', MBA : 'Finance'},
    {studId : '103', studName : 'Oogy', ITCourse : 'Mechanical', MBA : 'Marketing'},
    {studId : '104', studName : 'Shiva', ITCourse : 'Civil', MBA : 'Sales'} 
  ]
  constructor() { }

  ngOnInit() {
  }

}
