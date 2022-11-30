import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() secondEllapsed = new EventEmitter<number>();

  currentTimer = 0;
  //set interval is used to process the game running, and it is stored as a property in game control component s.t. it can be cleared later
  gameRunningInterval;
  
  //upon starting the game, interval is setup to trigger the secondEllapsed event every 1000ms, passing in the current value of the timer
  //stored as a property in this GameControl component
  onStartGame()
  {
    this.gameRunningInterval = setInterval(() =>{
      this.currentTimer++;
      this.secondEllapsed.emit(this.currentTimer)
    }, 1000);
  }


  onStopGame()
  {
    clearInterval(this.gameRunningInterval)
  }
}
