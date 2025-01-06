import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'app-promociones',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './promociones.component.html',
  styleUrl: './promociones.component.css'
})
export class PromocionesComponent {

  dialog = inject(MatDialog); // Angular Material

  verPromocion(promocion:string){

    let data = {}
    if (promocion=="uno") {
      data= {
        descripcion:"Gafas de Sol Seen SNSF0021 Unisex Color Rosado",
        referencia:" SKU 1767620 · Género Unisex",
        precio:"$319.000",
        imagen:"promocionUno.jpg"
      }
    }
    this.dialog.open(DialogDataExampleDialog, {
      data
    });
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

