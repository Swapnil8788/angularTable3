import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getUserDetails(){
    return [
      {
          name: "abc",
          age: 21,
          weight: 21,
          height: 22,
      }
    ]
  }
  getProductsMini() {
    return Promise.resolve(this.getUserDetails());
}



  constructor() { }
}
