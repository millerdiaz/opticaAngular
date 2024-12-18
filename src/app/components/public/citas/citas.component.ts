import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css'
})
export class CitasComponent {

  selectedDepartamento: string = '';
  selectedCiudad: string = '';
  selectedTienda: string = '';
  selectedTipoCita: string = '';
  selectedFecha: string = '';

  // Métodos para actualizar las variables cuando se selecciona un valor
  selectDepartamento(departamento: string) {
    this.selectedDepartamento = departamento;
  }

  selectCiudad(ciudad: string) {
    this.selectedCiudad = ciudad;
  }

  selectTienda(tienda: string) {
    this.selectedTienda = tienda;
  }

  selectTipoCita(tipoCita: string) {
    this.selectedTipoCita = tipoCita;
  }

  // Método para recolectar toda la información y mostrarla en consola
  agendarCita() {
    const datosCita = {
      departamento: this.selectedDepartamento,
      ciudad: this.selectedCiudad,
      tienda: this.selectedTienda,
      tipoCita: this.selectedTipoCita,
      fecha: this.selectedFecha
    };
    console.log("Cita Agendada:", datosCita);

    // Aquí puedes enviar los datos a un servicio o backend
    alert('Cita agendada con éxito.');
  }


}
