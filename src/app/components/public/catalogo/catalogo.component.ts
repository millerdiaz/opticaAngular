import { Component, inject } from '@angular/core';
import { CatalogoService } from '../../../services/catalogo/catalogo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

  catalogo!: any
  catalogoService = inject(CatalogoService)
  formCatalogo!: FormGroup

  constructor(private fb : FormBuilder, private router : Router){
    this.formCatalogo = this.fb.group({
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      img: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      disponibilidad: ['', [Validators.required]],

    })
  }



}
