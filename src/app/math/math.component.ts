import { Component, OnInit } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector: 'app-math',
    templateUrl: './math.component.html',
    styleUrls: ['./math.component.css'],

    template:'<br> {{add(2,3)}}  <br> {{add(45,3)}}  <br> {{add(19,3)}}  <br> {{helloWorld()}} <button (click)="onClickMe()">Click me!</button> {{clickMessage}}'

  })
export class MathComponent implements OnInit {
  
    clickMessage = '';

    onClickMe() {
      this.clickMessage = 'You are my hero!';
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
