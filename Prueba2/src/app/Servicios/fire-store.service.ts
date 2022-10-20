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
    return collection.valueChanges({ idField: 'id '})
  }

}