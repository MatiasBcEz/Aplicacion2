import { Injectable } from '@angular/core';
import { AngularFirestore } from '@Angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  constructor(
    public db: AngularFirestore
  ) { }

}