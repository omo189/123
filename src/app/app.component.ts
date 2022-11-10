import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = "";
  counter = 0;
  
  constructor() {
    this.message = "String interpolation is useful";
    this.counter = 1;
    let interval = setInterval(() => {
      this.counter++;
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);

    }, 20000);
  }
}

