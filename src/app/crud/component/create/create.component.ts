import {Component, OnInit} from '@angular/core';
import {CharacterModel} from '../../model/character.model';
import {FirebaseApiService} from '../../../services/firebase-api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  character: CharacterModel = {
    name: '',
    movies: '',
    spaceships: '',
    species: '',
  };

  constructor(private fireApi: FirebaseApiService) {
  }

  ngOnInit() {
  }

  add(character: CharacterModel) {
    this.fireApi.add(character).then( res => {
      console.log(res);
    });
  }
}
