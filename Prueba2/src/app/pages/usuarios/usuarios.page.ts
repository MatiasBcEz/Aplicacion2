import { Component, OnInit } from '@angular/core';
import { FireStoreService } from 'src/app/Servicios/fire-store.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  usuarios: any;

  constructor(
    public dbMisJuegos: FireStoreService
  ) { }

  ngOnInit() {
    this.dbMisJuegos.getUsuario().subscribe((data) => {
      this.usuarios = data;
    })
  }

}
