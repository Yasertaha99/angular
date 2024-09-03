import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Task1Component} from './component/task1/task1.component'
import {Task2Component} from './component/task2/task2.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Task1Component,Task2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frist';
}
