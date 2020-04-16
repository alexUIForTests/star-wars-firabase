import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {CharacterModel} from '../crud/model/character.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {

  constructor(private firestore: AngularFirestore) {
  }

  add(character: CharacterModel) {
    return this.firestore.collection('characters').add(character);
  }

  get() {
    return this.firestore.collection('characters').snapshotChanges();
  }
}
