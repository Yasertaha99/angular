import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [FormsModule],
  
templateUrl: './students.component.html',
  styles: ``
})
export class StudentsComponent {
email="";
name="";
age="";
sendData(){
  
}
}
