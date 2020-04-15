import { Component, OnInit } from '@angular/core';
import { ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  variable : number = 46;
  name : string ='';

  constructor() { }

  ngOnInit(): void {
  }

  countClick()
  {
    this.clickCounter +=1;
  }

  countClickMultipy()
  {
    this.variable +=1;
  }

  setClasses() {
    let myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4
    };
    return myClasses;
  }

}


