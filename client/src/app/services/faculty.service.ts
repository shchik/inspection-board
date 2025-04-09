import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IFaculty } from '../model/faculty.type';

@Injectable({
  providedIn: 'root',
})
export class FacultyService {
  http = inject(HttpClient);
  constructor() {}

  getFaculties() {
    const url = 'http://localhost:8080/api/faculty/get';
    return this.http.get<IFaculty[]>(url);
  }
}
