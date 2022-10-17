import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-juego',
  templateUrl: './agregar-juego.page.html',
  styleUrls: ['./agregar-juego.page.scss'],
})
export class AgregarJuegoPage implements OnInit {

  modeloNombreJuego : string = '';  
  modeloDescripcion : string = '';  
  modeloPrecio : string = ''; 
  modeloLink : string = ''; 
  modeloCategoria : string = '';  
  modeloSKU : string = '';  
  modeloLanzamiento : string = '';  

  constructor() { }

  ngOnInit() {
  }

  validarJuego(){
    console.log(this.modeloNombreJuego);
    console.log(this.modeloDescripcion);
    console.log(this.modeloPrecio);
    console.log(this.modeloLink);
    console.log(this.modeloCategoria);
    console.log(this.modeloSKU);
    console.log(this.modeloLanzamiento);
  }

}
