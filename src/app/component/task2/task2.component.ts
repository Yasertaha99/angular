import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  standalone: true,
  imports: [],
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.css'
})
export class Task2Component {
    Img=1;
    idInter:any;
    pre(){
      if(this.Img>1){
        this.Img-=1
      }
    }
    next(){
      if(this.Img<5)
      this.Img+=1
    }
    stop(){
      if(this.idInter){
      clearInterval(this.idInter);
      this.idInter =null;
      }
    }
    start(){
      this.stop();
      this.idInter=setInterval(()=>{
        if(this.Img<5)
        this.Img+=1
      else{
        this.Img=1
      }
      },1000)
    }
}
