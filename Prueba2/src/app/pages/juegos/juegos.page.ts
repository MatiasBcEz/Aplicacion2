import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit {

  juegos = []
    constructor(
      public navCtrl: NavController,
      private http:HttpClient) { 

  }

  ngOnInit() {
    this.http.get<any>('https://api.rawg.io/api/games?key=36214cc580e7493fa9f5b2d0792347c3')
    .subscribe(res => {
      console.log(res);
      this.juegos = res.results;
      
    })
  }
  
  //onClick(juego) {
  //  this.navCtrl.push(DetallePage, {
  //    id: juego.id
  //  })
  //}

}