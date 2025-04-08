import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  template: `
    <app-header />
    <app-home />
  `,
  styles: [
    `
      div {
        color: blue;
      }
    `,
  ],
})
export class AppComponent {
  title = 'client';
}
