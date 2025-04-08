import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/home/home.component').then(
        (module) => module.HomeComponent
      );
    },
  },
  {
    path: 'profile',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/profile/profile.component').then(
        (module) => module.ProfileComponent
      );
    },
  },
  {
    path: 'faculty',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/faculty/faculty.component').then(
        (module) => module.FacultyComponent
      );
    },
  },
];
