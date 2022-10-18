import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  api = 'https://kitsu.io/api/edge';

  constructor(public asd: HttpClient
    ) { 

  }


  verInfo(){
    return this.asd.get('$(this.api)/posts/$(id)')

  }

}
