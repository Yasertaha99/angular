import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsComponent } from './components/day3/students/students.component';
import { RegisterComponent } from './components/day3/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentsComponent,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tasks';
}
