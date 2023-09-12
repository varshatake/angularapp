import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RapidassignmentService } from 'src/Services/rapidassignment.service';

@Component({
  selector: 'app-rapidassignment',
  templateUrl: './rapidassignment.component.html',
  styleUrls: ['./rapidassignment.component.css']
})
export class RapidassignmentComponent implements OnInit {
 //ress:any=[];
  bookings:any;
  constructor(private rapidassignService:RapidassignmentService) { }

  
  ngOnInit() {
    this.showbookingdata(); 
}

showbookingdata() {
  this.rapidassignService.getBookings().subscribe(ress => {
    console.log('Bookings api', ress);
     this.bookings= ress;
});
}

}
