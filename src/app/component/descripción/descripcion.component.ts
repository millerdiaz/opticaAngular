import { Component, inject } from '@angular/core';
import { ProductsComponent } from '../../components/public/products/products.component';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-descripcion',
  standalone: true,
  imports: [],
  templateUrl: './descripcion.component.html',
  styleUrl: './descripcion.component.css'
})
export class DescripcionComponent {
  producService = inject(ProductService)
  product!: any;

  ngOnInit() {
    const productId = "67378f6208cdc3cad6548fb4";
    this.producService.getOne(productId).subscribe({
      next: (resApi: any) => {
          console.log(resApi);
          this.product = Array.isArray(resApi) ? resApi : [resApi]; // Asegúrate de que sea un array
      },
      error: (error: any) => {
          console.log(error);
      }
    });
}




}
