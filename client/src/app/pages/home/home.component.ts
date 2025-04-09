import { Component } from '@angular/core';
import { FacultyListComponent } from '../../components/faculty-list/faculty-list.component';

@Component({
  selector: 'app-home',
  imports: [FacultyListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
