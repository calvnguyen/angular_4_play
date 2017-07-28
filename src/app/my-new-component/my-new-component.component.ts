import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  template: `<h1> Hey Guys! </h1>
             <p>How are you doing?</p>         
   `,
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
