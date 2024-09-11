import { Component, Input } from '@angular/core';
import { student, students } from '../../../Types/students.type';

@Component({
  selector: 'app-cild-two',
  standalone: true,
  imports: [],
  templateUrl: './cild-two.component.html',
  styleUrl: './cild-two.component.css'
})
export class CildTwoComponent {

  @Input() students:students=[];
}
