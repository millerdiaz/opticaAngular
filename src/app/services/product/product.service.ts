import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "http://localhost:3000/api"
  constructor(private http:HttpClient) { }

  getOne(id:string){
    return this.http.get(`${this.apiUrl}/showOne/${id}`)
  }

}
