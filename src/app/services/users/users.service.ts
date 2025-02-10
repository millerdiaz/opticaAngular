import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
prodUrl = 'http//52.91.239.7:3000/api'
  // token: any = sessionStorage.getItem('token')

  constructor(private http: HttpClient) { }

  getUsers () {
    const headers = new HttpHeaders()
// .set('Authorization', `Bearer ${this.token}`)
    return this.http.get(`${this.prodUrl}/users`, {headers})
  }

  eliminarUser (id: string) {
    return this.http.delete(`${this.prodUrl}/deleteuser/${id}`)
  }

  addUser (body: any) {
    return this.http.post(`${this.prodUrl}/addUsers`, body)
  }

  updateUser (id :string, body:any) {
    return this.http.put(`${this.prodUrl}/updateuser/${id}`, body)
  }

  getOneUser (id :string) {
    return this.http.get(`${this.prodUrl}/user/${id}`)
  }
  session(body: any) {
    return this.http.post(`${this.prodUrl}/inicioDeSesion`, body)
  }

}
