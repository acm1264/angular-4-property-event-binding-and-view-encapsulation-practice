import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent {
  //take in the number to be displayed from outside (passed in by app comonent)
  @Input() number: number;
}
