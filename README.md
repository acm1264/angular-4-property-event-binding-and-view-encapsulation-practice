# Udemy Assignment 4

Set interval is used to process the game running, and it is stored as a property in GameControl component such that it can be cleared later. Upon starting the game, interval is setup to trigger the secondEllapsed event every 1000ms, passing in the current value of the timer stored as a property in the GameControl component. The Odd and Even components work fairly identically to display a single number with the word "odd" or "even" in front. Each time the event for a new number is triggered by GameControl, the App component will listen to that and call a function to update the arrays of the even and odd numbers. Those arrays are used with a ngFor to display the even and odd numbers on the display.

This assignment game me more difficulty mostly because I did not fully understand what the directions were asking for. Some stuff, like the setInterval needing to use a fat arrow function instead of calling a separate function, tricked me because I did not realize calling a separate function would result in losing the component's context when using "this" (instead, "this" seems to refer to the setInverval itself?). I forgot about the @Input to pass data in to the even and odd components as well, were my original idea would have been to just store the values directly in those two components, but since we needed to have a separate instance of the component per number, I knew a different solution was needed.

# A4PropertyEventBinding

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
