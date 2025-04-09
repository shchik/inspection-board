import { Component, input } from '@angular/core';
import { IFaculty } from '../../model/faculty.type';

@Component({
  selector: 'app-faculty-card',
  imports: [],
  templateUrl: './faculty-card.component.html',
  styleUrl: './faculty-card.component.scss',
})
export class FacultyCardComponent {
  faculty = input<IFaculty>({
    id: 1,
    name: 'sds',
    fullName: 'dsfa',
    image: '',
  });
}
