import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit {

  animes = []
  constructor(private http:HttpClient) { 

  }

  ngOnInit() {
    this.http.get<any>('https://api.rawg.io/api/games?key=36214cc580e7493fa9f5b2d0792347c3')
    .subscribe(res => {
      console.log(res);
      this.animes = res.results;
      
    })
  }
  

}