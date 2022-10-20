import { Component, OnInit } from '@angular/core';
import { FireStoreService } from 'src/app/Servicios/fire-store.service';

@Component({
  selector: 'app-mis-juegos',
  templateUrl: './mis-juegos.page.html',
  styleUrls: ['./mis-juegos.page.scss'],
})
export class MisJuegosPage implements OnInit {

  juegos: any;

  constructor(
    public dbMisJuegos: FireStoreService
  ) {}

  ngOnInit() {
    this.dbMisJuegos.getMisJuegos().subscribe((data) => {
      this.juegos = data;
    })
  }

}
