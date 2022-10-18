import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-animes',
  templateUrl: './mis-animes.page.html',
  styleUrls: ['./mis-animes.page.scss'],
})
export class MisAnimesPage implements OnInit {

  constructor(private http:HttpClient) { 

  }

  ngOnInit() {
    this.http.get('https://animechan.vercel.app/api/random')
    .subscribe(res => {
      console.log(res);
      
    })
  }

}
