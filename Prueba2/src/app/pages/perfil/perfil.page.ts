import { Component, OnInit } from '@angular/core';
import { FireStoreService } from 'src/app/Servicios/fire-store.service';
import { StorageService } from 'src/app/Servicios/storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuarios: any;
  idUsuario: any;

  constructor(
    public dbUsuarios: FireStoreService,
    public obtId: StorageService
  ) { }

  async ngOnInit() {
    this.idUsuario = localStorage.getItem('id')

    this.dbUsuarios.getUnUsuario(this.idUsuario).subscribe((data) => {
      this.usuarios = [data]
    })
  }

}
