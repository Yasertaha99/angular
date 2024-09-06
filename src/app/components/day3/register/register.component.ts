import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent {
 // data 
 name="";
 age="";
 // create event 
 @Output() myEvent=new EventEmitter();
 //fire event
   fireNew(){
    this.myEvent.emit({name:this.name, age: +this.age})

}

}
