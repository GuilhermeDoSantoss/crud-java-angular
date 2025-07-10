import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'filmes'},
  {
    path: 'filmes',
     loadChildren: () => import('./filmes/filmes-module').then(m => m.FilmesModule) },
];
