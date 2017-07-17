import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

//added for Promise to work
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  baseUrl = "http://ih-api.herokuapp.com"

  constructor(private myHttp: Http) { }


  getList () {
    let endPoint = "/characters"
    return this.myHttp.get(this.baseUrl+endPoint)
      .toPromise()
      .then(result => result.json());
  }

  getOne (id) {
    let endPoint = "/characters/" + id
    return this.myHttp.get(this.baseUrl+endPoint)
      .toPromise()
      .then(result => result.json());
  }

  createNew (newCharacter) {
    let endPoint = "/characters"
    return this.myHttp.post("http://ih-api.herokuapp.com/characters", newCharacter)
      .toPromise()
      .then(result => result.json());

  }

  editOne (id, updatedCharacter) {
    let endPoint = "/characters/" +id
    return this.myHttp.put(this.baseUrl+endPoint, updatedCharacter)
      .toPromise()
      .then(result => result.json());
  }

  deleteOne (id) {
    let endPoint = "/characters/" + id
    return this.myHttp.delete(this.baseUrl+endPoint)
      .toPromise()
      .then(result => result.json());
  }

}
