import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl: string = "http://localhost:2000/api"

  constructor(private http: HttpClient) { }

  getUsers () {
    const headers = new HttpHeaders()
    return this.http.get(${this.apiUrl}/users, {headers})
  }

  eliminarUser (id: string) {
    return this.http.delete(${this.apiUrl}/deleteuser/${id})
  }

  addUser (body: any) {
    return this.http.post(${this.apiUrl}/addUsers, body)
  }

  updateUser (id :string, body:any) {
    return this.http.put(${this.apiUrl}/updateuser/${id}, body)
  }

  getOneUser (id :string) {
    return this.http.get(${this.apiUrl}/user/${id})
  }
  session(body: any) {
    return this.http.post(${this.apiUrl}/inicioDeSesion, body)
  }

}
