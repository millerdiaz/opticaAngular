import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
 apiUrl: string = "http://localhost:3000/api/crear"
  constructor(private http:HttpClient ) { }
  createCita(cita: any){
    return this.http.post(this.apiUrl, cita)
  }
};
