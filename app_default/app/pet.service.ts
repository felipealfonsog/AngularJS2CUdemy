import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PetService {
  constructor(private http: Http) {}

  get(type) {
    let searchParams = new URLSearchParams();
    searchParams.append('type', type);
    return this.http.get('pets', { search: searchParams })
      .map(response => {
        return response.json().pets;
      });
  }
  
  add(pet) {
    return this.http.post('pets', pet)
      .map(response => {});
  }
  
  delete(pet) {
    return this.http.delete(`pets/${pet.id}`)
      .map(response => {});
  }
}
