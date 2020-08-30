import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(public db:AngularFirestore) { }

  getAllData(){
    return this.db.collection("testing").snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getSingleData(id){
    return this.db.collection("testing").doc(id).valueChanges()
  }

}
