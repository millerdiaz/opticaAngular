import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  producto = {
    nombre: 'Ray Ban 0RB4378',
    precio: '$ 700.000',
    imagen: 'path/to/image.jpg'
  }
}
