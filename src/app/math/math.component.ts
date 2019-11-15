import { Component, OnInit } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector: 'app-math',
    templateUrl: './math.component.html',
    styleUrls: ['./math.component.css'],

    

  })
export class MathComponent implements OnInit {
  
    clickMessage = '';

    onClickMe() {
      
      var num:number = parseInt(document.getElementById("1").value);
      var num2:number = parseInt(document.getElementById("2").value);
      //I know this is wrong because angular is throwing a huge hissy fit, but for now this works, I'll look into other stuff later.

      if (!num || !num2)
      {
        this.clickMessage = "Please enter something";
      }
      else{
        this.clickMessage = 'Sum is: ' + this.add(num,num2);
      }
      
    }
  add( x:number  ,y:number ):number{
      
    return x + y;
  }

  helloWorld():String{

    return "hello, world";

  }
  constructor() { }

  ngOnInit() {
    
  }

}
