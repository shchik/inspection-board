import { NgIf } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError } from 'rxjs';
import { IFaculty } from '../../model/faculty.type';
import { FacultyService } from '../../services/faculty.service';
import { FacultyCardComponent } from '../faculty-card/faculty-card.component';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-faculty-list',
  imports: [FacultyCardComponent, NgIf, LoaderComponent],
  templateUrl: './faculty-list.component.html',
  styleUrl: './faculty-list.component.scss',
})
export class FacultyListComponent implements OnInit {
  loader = signal<boolean>(true);
  facultyService = inject(FacultyService);
  facultyItems = signal<IFaculty[]>([]);

  ngOnInit(): void {
    this.facultyService
      .getFaculties()
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        })
      )
      .subscribe((faculties) => {
        this.facultyItems.set(faculties);
        this.loader.set(false);
      });
  }
}
