import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CitasService } from '../../../services/citas.service';

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
  selectedEspecialista: String='';
  constructor (private citas: CitasService ){
  }
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

  selectEspecialista(especialista: string){
    this.selectedEspecialista = especialista;
  }

  // Método para recolectar toda la información y mostrarla en consola
  agendarCita() {
    const datosCita = {
      departamento: this.selectedDepartamento,
      ciudad: this.selectedCiudad,
      tienda: this.selectedTienda,
      tipoDeCita: this.selectedTipoCita,
      especialista: this.selectedEspecialista,
      fecha: this.selectedFecha
    };
     this.addCita(datosCita);

    console.log("Cita Agendada:", datosCita);

    // Aquí puedes enviar los datos a un servicio o backend
    alert('Cita agendada con éxito.');
  }


    // metodo para agregar cita

    addCita(data:any){
      this.citas.createCita(data).subscribe(res=> {console.log(res)}
      )
    }
}


