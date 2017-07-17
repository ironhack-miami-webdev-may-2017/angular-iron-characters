import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service'

//import the service and import for Promise
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters: Array<any> = [
    {name: "TheName",
    id: "TheID",
    occupation: "TheOccupation",
    debt: "TheDebt",
    weapon: "TheWeapon"
  }
  ];

  constructor(private characterApi: ApiService) { }

  ngOnInit() {
  }

  fetchAll () {
    this.characterApi.getList().then((charactersArray) => {
      this.characters = charactersArray
      console.log(charactersArray);
    })

  }

  fetchOne (id) {
    this.characterApi.getOne(id).then((character)=> {
      console.log(character);
    })

  }

  deleteOne (id) {
    this.characterApi.deleteOne(id).then((character)=> {
      console.log(character);
    })

  }

}
