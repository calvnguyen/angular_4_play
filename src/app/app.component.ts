import { Component } from '@angular/core';
// using services
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
  
  <!-- property bindings -->
  <h1>Hey guys! </h1>
  <img src = "{{ angularLogo }}">
  <img [src]="angularLogo">
  <img bind-src="angularLogo">
  
  <button [disabled]="buttonStatus == 'enabled'">My Button</button>
  
  <!-- event binding -->
  <button (mouseenter)="myEvent($event)">My Event Button</button>
  
  <!-- change css via class binding -->
  <h1 [class.red-title]="titleClass">Hello</h1>
  
  <h1 [ngClass] = "titleClasses">HI AGAIN</h1>
  
  <!-- style binding -->
  <h1 [style.color]="titleStyle ? 'green' : 'pink'">MY TITLE</h1>
  
  <h1 [ngStyle]="titleStyles">MY TITLE TWO</h1>
  
  <p>{{ someProperty }}</p>
  
  <!-- Animations -->
  <p [@myAwesomeAnimation]='state' (click)="animateMe()">I will animate</p>
  
  
  `,
  styles: [`
    h1 {
      text-decoration: underline;
    }
  
    .red-title {
      color: red;
    }
    
    .large-title{
      font-size: 4em;
     }
     
    p {
      width: 200px;
      background: lightgray;
      margin: 100px auto;
      text-align: center;
      padding: 20px;
      font-size: 1.5em;
    }
     
  `],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),

      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(35px)', offset: 0.5}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1}),
      ]))),
    ]),
  ]
})
export class AppComponent {

  constructor(private dataService:DataService){

  }

  someProperty:string = '';

  state:string = 'small';

  ngOnInit(){
    console.log(this.dataService.cars);
    this.someProperty = this.dataService.myData();
  }

  myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  }

  myArr = ['him', 'hers', 'yours'];
  myBool = 'something';

  angularLogo = 'https://qph.ec.quoracdn.net/main-qimg-42418ea2d6d88684f367b335027dbbf3';

  buttonStatus = "enabled";

  // event binding
  myEvent(event){
    console.log(event);
  }

  animateMe(){
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  titleClass = true;

  titleClasses = {
    'red-title': true,
    'large-title': true
  }

  titleStyle = true;

  titleStyles = {
    'color' : 'purple',
    'font-size' : '4em'
  }

}
