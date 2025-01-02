import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
 apiUrl: string = "http://localhost:3000/api/crear"
 apiUrl2: string = "http://localhost:3000/api"
  constructor(private http:HttpClient ) { }
  createCita(cita: any){
    return this.http.post(this.apiUrl, cita)
  }
  getCita (id: string){
    return this.http.get(`${ this.apiUrl2}/buscarCita/${id}`)
  }
};

