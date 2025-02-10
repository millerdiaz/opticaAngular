import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  prodUrl = "http//52.91.239.7:3000/api"
  constructor(private http:HttpClient) { }

  getOne(id:string){
    return this.http.get(`${this.prodUrl}/showOne/${id}`)
  }


  getProducts() {
    return this.http.get(`${this.prodUrl}/showProduct`)
  }

}
