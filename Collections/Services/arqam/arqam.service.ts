import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class arqamService {
  constructor(
    public db: AngularFirestore,
  ) { }

  addarqam(data) {
    return this.db.collection('arqam').add(data);
  }
  getarqamData() {
    return this.db.collection('arqam').snapshotChanges();
  }
  delarqam(docId) {
    return this.db.collection('arqam').doc(docId).delete();
  }


  getSinglearqam(docId) {
    return this.db.collection('arqam').doc(docId).snapshotChanges();
  }


  updatearqam(docData, docId) {
    return this.db.collection('arqam').doc(docId).update(docData);
  }
}

