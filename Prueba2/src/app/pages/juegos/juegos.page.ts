import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FireStoreService } from 'src/app/Servicios/fire-store.service';
import { StorageService } from 'src/app/Servicios/storage.service';
import { JuegosPageRoutingModule } from './juegos-routing.module';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit {

  juegos = []
    constructor(
      public ss: StorageService,
      public navCtrl: NavController,
      public dbMisJuegos: FireStoreService,
      private http:HttpClient) { 

  }

  ngOnInit() {
    this.http.get<any>('https://api.rawg.io/api/games?key=36214cc580e7493fa9f5b2d0792347c3')
    .subscribe(res => {
      console.log(res);
      this.juegos = res.results;
    })
  }
  
  agregarMisJuegos(juego) {
    this.ss.getDatos('id').then(data => {
      let informacion = {
        'idUsuario': data,
        'id': juego.id,
        'nombre': juego.name,
        'img': juego.background_image,
      }
      this.dbMisJuegos.agregarMisJuegos(informacion)
    })
  }
}