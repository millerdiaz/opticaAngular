import { Component, inject } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CitasService } from '../../../services/citas.service';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css'],

})
export class CitasComponent {
  citaAgendada: boolean = false
  cita!: any
  citasService = inject(CitasService)
  selectedCiudad: string = '';
  selectedTienda: string = '';
  selectedTipoCita: string = '';
  selectedFecha: string = '';
  selectedEspecialista: String='';
  ////////***** Para seleccionar Cc dependiento de la ciudad */
  bogota: any = ['Chapinero', 'CC Titan Plaza', 'CC el retiro', 'CC Gran Estación'];
  medellin: any =  ['CC Oviedo', 'CC El Tesoro', 'CC Viva Envigado']; // CC El Tesoro
  cali: any = ['Palmetto Plaza', 'Unicentro', 'CC Jardín Plaza'];

  ////////***** Para seleccionar Especialista dependiendo de la ciudad */
  bogotaEspecialista: any = ['Alberto Martínez', 'Laura Gómez', 'Juan Pérez', 'Sofía Rodríguez'];
  medellinEspecialista: any =  ['Carlos López', 'Ana Morales', 'Pedro Ramírez'];
  caliEspecialista: any = ['María Fernández', 'José Torres', 'Lucía Castro'];


  // Ciudades y sus respectivas tiendas
  // ciudadesYTiendas: any = {
  //   Bogotá: ['Chapinero', 'CC Titan Plaza', 'CC el retiro', 'CC Gran Estación'],
  //   Medellín: ['CC Oviedo', 'CC El Tesoro', 'CC Viva Envigado'],
  //   Cali: ['Palmetto Plaza', 'Unicentro', 'CC Jardín Plaza']
  // };


  // ciudades: string[] = Object.keys(this.ciudadesYTiendas);
  // Lista dinámica de tiendas según la ciudad seleccionada
  tiendas: string[] = [];

  constructor (private citas: CitasService ){}

//El ngOnInit va después del constructor

ngOnInit(){
  const citasAgendadas = '6764a7884b22fd492cc61e23'
  this.citasService.getCita(citasAgendadas).subscribe({
    next: (resApi: any )=>{
      this.cita = Array.isArray(resApi)? resApi: [resApi]

    }, error :( error: any ) =>{
      console.log(error);

    }
  })
}



  // Métodos para actualizar las variables cuando se selecciona un valor

  selectCiudad(ciudad: string) {
    console.log(ciudad);

    this.selectedCiudad = ciudad;
    // this.selectedCiudad = ciudad;
    // this.tiendas = this.ciudadesYTiendas[ciudad] || []; // Actualiza las tiendas dinámicamente
    this.selectedTienda = ''; // Resetea la tienda seleccionada
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

      ciudad: this.selectedCiudad,
      tienda: this.selectedTienda,
      tipoDeCita: this.selectedTipoCita,
      especialista: this.selectedEspecialista,
      fecha: this.selectedFecha
    };
     this.addCita(datosCita);
     this.citaAgendada = true

    console.log("Cita Agendada:", datosCita);

    // Aquí puedes enviar los datos a un servicio o backend

  }


    // metodo para agregar cita

    addCita(data:any){
      this.citas.createCita(data).subscribe(res=> {console.log(res)}
      )
    }
}


