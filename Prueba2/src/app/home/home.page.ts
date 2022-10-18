import { Component } from '@angular/core';
import { ApiServiceService } from "../Servicios/api-service.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public s: ApiServiceService
  ) {
    this.s.verInfo().subscribe((data)=>{
      console.log(data);
      
    })
  }

}
