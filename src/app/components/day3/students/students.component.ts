import { Component, Input } from '@angular/core';
import { students } from '../../../Types/students.type';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [],
  templateUrl: './students.component.html',
  styles: ``
})

export class StudentsComponent {
  
  
  @Input() Students:students=[];
  // console.log(Students);
}
