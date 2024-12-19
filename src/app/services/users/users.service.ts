import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl: string = "http://localhost:2000/api"
  // token: any = sessionStorage.getItem('token')

  constructor(private http: HttpClient) { }

  getUsers () {
    const headers = new HttpHeaders()
// .set('Authorization', `Bearer ${this.token}`)
    return this.http.get(`${this.apiUrl}/users`, {headers})
  }

  eliminarUser (id: string) {
    return this.http.delete(`${this.apiUrl}/deleteuser/${id}`)
  }

  addUser (body: any) {
    return this.http.post(`${this.apiUrl}/adduser`, body)
  }

  updateUser (id :string, body:any) {
    return this.http.put(`${this.apiUrl}/updateuser/${id}`, body)
  }

  getOneUser (id :string) {
    return this.http.get(`${this.apiUrl}/user/${id}`)
  }
  session(body: any) {
    return this.http.post(`${this.apiUrl}/inicioDeSesion`, body)
  }

}
