import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-characters-forms',
  templateUrl: './characters-forms.component.html',
  styleUrls: ['./characters-forms.component.css']
})
export class CharactersFormsComponent implements OnInit {

  characterToCreateOrEdit = {};

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  createCharacter(name, occupation, weapon, debt){
    this.api.createNew({
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: debt
    }).subscribe((res) => console.log(res));
  }

  editCharacter(id, name, occupation, weapon, debt){
    this.api.editOne(id, {
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: debt
    }).subscribe((res) => console.log(res));
    }

}
