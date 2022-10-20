import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FireStoreService } from 'src/app/Servicios/fire-store.service';
import { StorageService } from 'src/app/Servicios/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin : FormGroup;

  constructor(
    public ss: StorageService,
    public dbUsuarios: FireStoreService,
    public router: Router,
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      userName: [''],
      password: [''],
    })
  }

  validarLogin(){
    let userName = this.formLogin.value.userName;
    let password = this.formLogin.value.password;

    this.dbUsuarios.getUsuario().subscribe((data: any) => {
      data.forEach(usuario => {
        if (userName == usuario.userName && password == usuario.password){
          this.ss.agregarDatos('id', usuario.id)
          this.router.navigate(['home'])
        }
      })
    })
  }

}
