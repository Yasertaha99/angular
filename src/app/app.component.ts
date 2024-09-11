import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsComponent } from './components/day3/students/students.component';
import { RegisterComponent } from './components/day3/register/register.component';
import { students } from './Types/students.type';
import { CildOneComponent } from './components/day4/cild-one/cild-one.component';
import { CildTwoComponent } from './components/day4/cild-two/cild-two.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentsComponent,RegisterComponent,CildOneComponent,CildTwoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // // title = 'tasks';
  // Students:students=[];
  // Getdata(data:any){
  //   // console.log(data);
  //   this.Students.push(data);
  // }
  Students:students=[];
  addData(data:any){
   this.Students.push(data);
    // console.log(data);
  }
}
