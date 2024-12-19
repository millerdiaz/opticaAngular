import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  userService = inject(UsersService)
    formulario!: FormGroup
    constructor(private fb : FormBuilder, private router: Router) {
        this.formulario = this.fb.group({
            correo: ['', []],
            apellido: ['',[]],
            nombre: ['', []],
            contrasena: ['',[]]
        })
    }
    ngOnInit () {
      if (sessionStorage.getItem('token'))
          this.router.navigate(['login'])
    }

    registro () {
      this.userService.addUser(this.formulario.value).subscribe({
          next:(resApi: any)=> {
          Swal.fire({
              icon:"success",
              title:"Bienvenido!",
              text:`${resApi.email}`
          })
          },
          error:(error:any)=> {
              console.log(error);
              Swal.fire({
                  icon:"error",
                  title:"Usuario no registrado!",
                  text:`${error.error.error}`
              })
          }
      })
  }

}
