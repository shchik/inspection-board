import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError } from 'rxjs';
import { IFaculty } from '../../model/faculty.type';
import { FacultyService } from '../../services/faculty.service';
import { FacultyCardComponent } from '../faculty-card/faculty-card.component';

@Component({
  selector: 'app-faculty-list',
  imports: [FacultyCardComponent],
  templateUrl: './faculty-list.component.html',
  styleUrl: './faculty-list.component.scss',
})
export class FacultyListComponent implements OnInit {
  facultyService = inject(FacultyService);
  facultyItems = signal<IFaculty[]>([]);

  ngOnInit(): void {
    this.facultyService
      .getFaculties()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw new err();
        })
      )
      .subscribe((faculties) => {
        this.facultyItems.set(faculties);
      });
  }
}
