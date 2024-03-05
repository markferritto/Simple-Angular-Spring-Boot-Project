import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//the root component
//the RouterOutlet is imported into the AppComponent which is the root component of the application. 
//This means that all child routes of the application will be rendered inside the AppComponent template.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string;

  constructor() {
    this.title = 'Spring Boot - Angular Application';
  }
}
