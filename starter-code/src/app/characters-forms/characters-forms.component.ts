import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service'

//import the service and import for Promise
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-characters-forms',
  templateUrl: './characters-forms.component.html',
  styleUrls: ['./characters-forms.component.css'],
})
export class CharactersFormsComponent implements OnInit {

  characterToCreate = {};
  characterToEdit = {};


  constructor(private characterApi: ApiService) { }

  ngOnInit() {
  }

  createNew(){
    this.characterApi.createNew(this.characterToCreate).then((newCharacter)=>{

      console.log(newCharacter);
    })
  }

  editOne(id){
    this.characterApi.editOne(id, this.characterToEdit).then((updatedCharacter)=>{
      console.log(updatedCharacter);
    })
  }

}
