import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { CitasService } from '../../../services/citas.service';
import { CommonModule } from '@angular/common';

import { Router, RouterLink } from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css'],

})
export class CitasComponent {

  //formulario
  formUsuarios!: FormGroup
  // constructor(private fb: FormBuilder, private router: Router) {

  // }
  //
  dialog = inject(MatDialog); // Angular Material
  citaAgendada: boolean = false
  formCitas!: FormGroup
  cita!: any
  citasService = inject(CitasService)
  selectedCiudad: string = '';
  selectedTienda: string = '';
  selectedTipoDeCita: string = '';
  selectedFecha: string = '';
  selectedEspecialista: String='';
  //datos usuario
  selectedNombre: string = '';
  selectedCedula: string = '';
  selectedCorreo: string = '';
  selectedCelular: string = '';
  selectedEdad: string = '';

  ////////***** Para seleccionar Cc dependiento de la ciudad */
  bogota: any = ['Chapinero', 'CC Titan Plaza', 'CC el retiro', 'CC Gran Estación'];
  medellin: any =  ['CC Oviedo', 'CC El Tesoro', 'CC Viva Envigado']; // CC El Tesoro
  cali: any = ['Palmetto Plaza', 'Unicentro', 'CC Jardín Plaza'];

  ////////***** Para seleccionar Especialista dependiendo de la ciudad */
  bogotaEspecialista: any = ['Alberto Martínez', 'Laura Gómez', 'Juan Pérez', 'Sofía Rodríguez'];
  medellinEspecialista: any =  ['Carlos López', 'Ana Morales', 'Pedro Ramírez'];
  caliEspecialista: any = ['María Fernández', 'José Torres', 'Lucía Castro'];





  // ciudades: string[] = Object.keys(this.ciudadesYTiendas);


  // Lista dinámica de tiendas según la ciudad seleccionada
  tiendas: string[] = [];

  constructor (private citas: CitasService,private fb : FormBuilder ){
    this.formCitas = this.fb.group({

      ciudad:["", [Validators.required]],
      tienda: ["", [Validators.required]],
      tipoDeCita:["", [Validators.required]],
      especialista:["", [Validators.required]],
      fecha:["",[Validators.required]],
      nombreCompleto: ["",[Validators.required]],
      cedula:["", [Validators.required]],
      telefono:["", [Validators.required, Validators.minLength(10)]],
      email:["", [Validators.required, Validators.email]]
    })

  }



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
    console.log("función selectCiudad",this.selectedCiudad);


    this.selectedTienda = ''; // Resetea la tienda seleccionada
  }

  selectTienda(tienda: string) {
    this.selectedTienda = tienda;
  }

  selectTipoDeCita(tipoCita: string) {
    this.selectedTipoDeCita = tipoCita;
  }

  selectEspecialista(especialista: string){
    this.selectedEspecialista = especialista;
    console.log('especialista', especialista);
  }

  selectNombre(nombre: string){
      this.selectedNombre = 'Ana';
      console.log('nombre de usuario', nombre);

  }

agendarCita() {
  // Obtener datos del formulario
  const datosCita = this.formCitas.value;

  // Agregar los valores seleccionados desde los botones
  const citaCompleta = {
    ...datosCita,  // Datos del formulario
    ciudad: this.selectedCiudad,
    tienda: this.selectedTienda,
    tipoDeCita: this.selectedTipoDeCita,
    especialista: this.selectedEspecialista,
    fecha: this.selectedFecha
  };

  console.log("Cita Agendada:", citaCompleta);

  // Enviar la cita al backend
  this.addCita(citaCompleta);

  // Marcar la cita como agendada
  this.citaAgendada = true;

  // Abrir el diálogo con los datos
  this.dialog.open(DialogDataExampleDialog, {
    data: citaCompleta,
  });
}

    // Aquí puedes enviar los datos a un servicio o backend

  usuarioCita(){
    const datosUsuario = {
      nombre: this.selectedNombre,
      cedula: this.selectedCedula,
      correo: this.selectedCorreo,
      celular: this.selectedCelular,
      edad: this.selectedEdad

    };
    console.log("Usuario", datosUsuario);

  this.addCita(datosUsuario);
  this.citaAgendada = true

  this.dialog.open(DialogDataExampleDialog, {
    data: datosUsuario,
  });

  }

    // metodo para agregar cita

    addCita(data:any){
      this.citas.createCita(data).subscribe(res=> {console.log(res)}
      )
    }
}


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-info-cita.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent],
})
export class DialogDataExampleDialog {
  data = inject(MAT_DIALOG_DATA);
  dataUsuario = inject(MAT_DIALOG_DATA);

}

function usuarioCita() {
  throw new Error('Function not implemented.');
}

