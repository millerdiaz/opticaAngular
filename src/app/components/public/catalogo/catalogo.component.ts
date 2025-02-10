import { Component, inject } from '@angular/core';
import { CatalogoService } from '../../../services/catalogo/catalogo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})



export class CatalogoComponent {

  ProductService= inject(ProductService)
  products! : any
  ngOnInit(){
    this.ProductService.getProducts().subscribe({
      next: (resApi: any)=>{
        this.products= resApi
      },
      error: (error: any)=>{
        console.log(error);

      }
    })
  }
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
