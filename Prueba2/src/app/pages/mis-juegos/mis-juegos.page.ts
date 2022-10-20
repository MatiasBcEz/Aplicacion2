import { Component, OnInit } from '@angular/core';
import { FireStoreService } from 'src/app/Servicios/fire-store.service';
import { StorageService } from 'src/app/Servicios/storage.service';

@Component({
  selector: 'app-mis-juegos',
  templateUrl: './mis-juegos.page.html',
  styleUrls: ['./mis-juegos.page.scss'],
})
export class MisJuegosPage implements OnInit {

  juegos: any[]=[];
  idUsuario: any;

  constructor(
    public dbMisJuegos: FireStoreService,
    public obtId: StorageService
  ) {}

  async ngOnInit() {
    await this.obtId.getDatos('id').then((data)=>{
      this.idUsuario=data;
    })

    this.dbMisJuegos.getMisJuegos().subscribe((data: any) => {
      data.forEach(juegos=>{
        if (juegos.idUsuario==this.idUsuario){
          this.juegos.push(juegos);
        }
        

      })
      
    });
  }

  eliminarMisJuegos(id: string){
    this.juegos=[]
    
    this.dbMisJuegos.eliminarMisJuegos(id)
  }




}
