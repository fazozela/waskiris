import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component')
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about-us/about-us.component')
  },
  {
    path: 'our-projects',
    loadComponent: () => import('./pages/our-projects/our-projects.component')
  },
  {
    path: 'our-impact',
    loadComponent: () => import('./pages/our-impact/our-impact.component')
  },
  {
    path: 'media',
    loadComponent: () => import('./pages/media/media.component')
  },
  {
    path: 'get-involved',
    loadComponent: () => import('./pages/get-involved/get-involved.component')
  },
  {
    path: 'donate-now',
    loadComponent: () => import('./pages/donate-now/donate-now.component')
  },
  {
    path: 'digifree',
    loadComponent: () => import('./pages/digifree/digifree')
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component')
  },
  { path: '**', redirectTo: '' }
];
