import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FireStoreService } from 'src/app/Servicios/fire-store.service';
import { StorageService } from 'src/app/Servicios/storage.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  
  formEditarPerfilUsuario : FormGroup;
  usuarios: any[]=[];
  idUsuario: string;

  constructor(
    private fb: FormBuilder,
    public dbUsuarios: FireStoreService,
    public activatedRoute: ActivatedRoute,
    public obtId: StorageService,
  ) { }

  ngOnInit() {
    this.idUsuario = this.activatedRoute.snapshot.paramMap.get('id');
    this.formEditarPerfilUsuario = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3)]],
      email: ['', [Validators.required, Validators.minLength(6), Validators.email]],
      region: ['', [Validators.required, Validators.minLength(3)]],
      comuna: ['', [Validators.required, Validators.minLength(3)]],
      direccion: ['', [Validators.required, Validators.minLength(3)]]
    });

    this.obtId.getDatos('id').then((data)=> {
      this.dbUsuarios.getUnUsuario(data).subscribe((user) => {
        this.usuarios = [user]
      })
    })

  }

  editarPerfilUsuario(){
    console.log(this.formEditarPerfilUsuario.value);
    this.dbUsuarios.editarUsuario(this.idUsuario, this.formEditarPerfilUsuario.value)
  }

}