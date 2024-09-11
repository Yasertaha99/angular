import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cild-one',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cild-one.component.html',
  styleUrl: './cild-one.component.css'
})
export class CildOneComponent {
  email="";
  name="";
  age="";
  @Output()  myEventToAdd =new EventEmitter();
  sendData(){
    this.myEventToAdd.emit( {email:this.email,name:this.name,age:this.age} );
  }
}
