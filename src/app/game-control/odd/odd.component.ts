import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent {
  //take in the number to be displayed from outside (passed in by app comonent)
  @Input() number: number;
}
