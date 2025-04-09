import { Component, signal } from '@angular/core';
import { FacultyListComponent } from '../../components/faculty-list/faculty-list.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FacultyListComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  footer = signal('ahahahha');
}
