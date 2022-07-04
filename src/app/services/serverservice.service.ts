import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import Sensor from '../Model/sensors';


@Injectable({
  providedIn: 'root'
})
export class ServerserviceService {
  collectionRef: AngularFirestoreCollection<Sensor>;
  constructor(private db:AngularFirestore) {
    this.collectionRef = db.collection("/sensors")
   }


  getAll(){
    return this.collectionRef
  }
}
