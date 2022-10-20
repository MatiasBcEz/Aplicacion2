import { Component, OnInit } from '@angular/core';
import { FireStoreService } from 'src/app/Servicios/fire-store.service';
import { StorageService } from 'src/app/Servicios/storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuarios: any[]=[];
  idUsuario: any;

  constructor(
    public dbUsuarios: FireStoreService,
    public obtId: StorageService
  ) { }

  async ngOnInit() {
    await this.obtId.getDatos('id').then((data)=>{
      this.idUsuario=data;
    })

    this.obtId.getDatos('id').then((data)=> {
      this.dbUsuarios.getUnUsuario(data).subscribe((user) => {
        this.usuarios = [user]
      })
    })
  }

}
