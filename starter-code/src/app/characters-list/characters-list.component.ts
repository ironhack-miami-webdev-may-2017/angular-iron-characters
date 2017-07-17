import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  providers: [ApiService]
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
  omfg: Object = {};

  constructor(private api: ApiService) { }

  ngOnInit() {}

  fetchAll () {
    this.api.getList().subscribe((char) => this.characters = char);
  }

  fetchOne (id) {
    this.characters = []
    console.log(id)
    this.api.getOne(id).subscribe((char) => {
      this.omfg = char
      this.characters.push(this.omfg)
    });
  }

  deleteOne (id) {
    console.log(`Deleting object number ${id}`)
    this.api.deleteOne(id).subscribe();
  }

}
