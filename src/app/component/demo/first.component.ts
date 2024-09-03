import { Component } from "@angular/core";
import { SecondComponent } from "../second/second.component";
import { FormsModule } from "@angular/forms";

@Component({
    selector:"app-first",
    standalone:true,
    imports:[
        SecondComponent,
        FormsModule
    ],
    templateUrl:"./first.component.html",
    styleUrl:"./first.component.css"
})
export class FirstComponent{
    name="Ahmed";
    varClass = "inp";
    imgSrc="/Images/1.jpg";
    fName="";
    lName = "";
    salary = 10000;

    chgName(){
        this.name = "Aly";
        this.varClass = "inp2";
    }
    chgPic1(){
        this.imgSrc = "/Images/2.jpg";
    }
    chgPic2(){
        this.imgSrc = "/Images/1.jpg";
    }

    getData(e:Event){
        var element = (e.target) as HTMLInputElement 
        // console.log(element.value);
        this.fName = element.value;
    }
}