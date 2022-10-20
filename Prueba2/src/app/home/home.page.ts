import { Component } from '@angular/core';
import { StorageService } from '../Servicios/storage.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public ss: StorageService
  ){
    this.ss.getDatos('id').then((data)=>{
      console.log(data);
      
    })
  }

}
