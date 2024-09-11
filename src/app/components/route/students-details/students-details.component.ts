import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-students-details',
  standalone: true,
  imports: [],
  templateUrl: './students-details.component.html',
  styles: ``
})
export class StudentsDetailsComponent {
  ID=0;
constructor(myRoute:ActivatedRoute){

  // console.log(myRoute.snapshot.params['id']);
  this.ID=myRoute.snapshot.params['id'];
}
}
