import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'mis-juegos',
    redirectTo: 'mis-juegos',
    pathMatch: 'full'
  },
  {
    path: 'agregar-juego',
    redirectTo: 'agregar-juego',
    pathMatch: 'full'
  },
  {
    path: 'mis-animes',
    redirectTo: 'mis-animes',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  },
  {
    path: 'e404',
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'agregar-juego',
    loadChildren: () => import('./pages/agregar-juego/agregar-juego.module').then( m => m.AgregarJuegoPageModule)
  },
  {
    path: 'mis-juegos',
    loadChildren: () => import('./pages/mis-juegos/mis-juegos.module').then( m => m.MisJuegosPageModule)
  },
  {
    path: 'mis-animes',
    loadChildren: () => import('./pages/mis-animes/mis-animes.module').then( m => m.MisAnimesPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
