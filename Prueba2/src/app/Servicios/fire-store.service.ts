import { Injectable } from '@angular/core';
import { AngularFirestore } from '@Angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  constructor(
    public db: AngularFirestore
  ) { }

  agregarMisJuegos(data: any) {
    const collection = this.db.collection("mis-juegos");
    return collection.doc().set(data);
  }

  getMisJuegos(){
    const collection  = this.db.collection("mis-juegos");
    return collection.valueChanges({ idField: 'id'})
  }

  eliminarMisJuegos(id){
    const collection  = this.db.collection("mis-juegos");
    return collection.doc(id).delete()
  }

  agregarUsuario(data: any) {
    const collection = this.db.collection("usuario");
    return collection.doc().set(data);
  }

  getUsuario(){
    const collection  = this.db.collection("usuario");
    return collection.valueChanges({ idField: 'id'})
  }

  editarUsuario(id, data){
    const collection  = this.db.collection("usuario");
    return collection.doc(id).update(data)
  }

  eliminarUsuario(id){
    const collection  = this.db.collection("usuario");
    return collection.doc(id).delete()
  }
}