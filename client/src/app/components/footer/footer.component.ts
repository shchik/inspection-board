import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  footer = input('something');

  keyUpHandler = (event: KeyboardEvent) => {
    console.log(`key = ${event.key}`);
  };
}
