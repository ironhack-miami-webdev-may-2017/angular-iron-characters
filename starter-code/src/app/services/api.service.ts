import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiService {

  baseUrl = "http://ih-api.herokuapp.com"

  constructor(public myHttp: Http) { }


  getList () {
    let endPoint = "/characters"
    return this.myHttp.get(this.baseUrl+endPoint)
      .map((res: Response) => res.json());
  }

  getOne(id) {
    console.log(id)
    let endPoint = "/characters/" + id
    return this.myHttp.get(this.baseUrl+endPoint)
      .map((res: Response) => res.json());
  }

  createNew (character) {
    let endPoint = "/characters/"
    return this.myHttp.post(this.baseUrl+endPoint, character)
    .map((res: Response) => console.log(res.json()));
  }

  editOne (id, character) {
    let endPoint = "/characters/" + id
    return this.myHttp.patch(this.baseUrl+endPoint, character)
  }

  deleteOne (id) {
    let endPoint = "/characters/" + id
    return this.myHttp.delete(this.baseUrl+endPoint)
  }

}
