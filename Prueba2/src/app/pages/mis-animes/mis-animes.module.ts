import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisAnimesPageRoutingModule } from './mis-animes-routing.module';

import { MisAnimesPage } from './mis-animes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisAnimesPageRoutingModule
  ],
  declarations: [MisAnimesPage]
})
export class MisAnimesPageModule {}
