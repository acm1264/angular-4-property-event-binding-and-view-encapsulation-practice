import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers:number[] = [];

  //this function is triggered when the event "secondEllapsed" from teh game control component is fired
  OnSecondEllasped(timer: number)
  {
    //push th number into the array of either even or odd numbers as appropriate
    if(timer % 2 == 0)
    {
      this.evenNumbers.push(timer)
    }
    else
    {
      this.oddNumbers.push(timer)
    }
  }
}
