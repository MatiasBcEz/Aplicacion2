import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisAnimesPage } from './mis-animes.page';

const routes: Routes = [
  {
    path: '',
    component: MisAnimesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisAnimesPageRoutingModule {}
