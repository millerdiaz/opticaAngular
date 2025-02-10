import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-promociones',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './promociones.component.html',
  styleUrl: './promociones.component.css'
})
export class PromocionesComponent {

productsService = inject(ProductService)
products! : any
ngOnInit(){
  this.productsService.getProducts().subscribe({
    next:(resApi:any)=>{
      this.products = resApi
    },
    error: (error:any) =>{
      console.log(error);

    }
  })
}

}
@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-info-promocion.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent],
})
export class DialogDataExampleDialog {
  data = inject(MAT_DIALOG_DATA);
}

