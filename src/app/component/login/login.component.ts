import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent {
  userServices = inject(UsersService);
  formLogin! : FormGroup
  users!: any
  constructor(private fb : FormBuilder, private router: Router) {
    this.formLogin = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]]
    })
  }

    ngOnInit() {
      Swal.fire({
        icon: "error",
        title: "Sesión inválida",
        text: "Por favor, inicie sesión nuevamente."
      });

      this.userServices.getUsers().subscribe({
        next: (resApi: any) => {
          console.log(resApi);
          this.users = resApi;
        },
        error: (error: any) => {
          console.log('Error al verificar usuario:', error);
          this.router.navigate(['/login']);
          Swal.fire({
            icon: "error",
            title: "Sesión inválida",
            text: "Por favor, inicie sesión nuevamente."
          });
        }
      });



  }


login() {

  console.log(this.formLogin.value);

  if (this.formLogin.valid) {
      this.userServices.session(this.formLogin.value).subscribe({
          next:(resApi:any)=> {
              let token = resApi
              sessionStorage.setItem('token', JSON.stringify (token))
              this.ngOnInit()
              this.router.navigate(['home'])

              Swal.fire({
                  icon:"success",
                  title:"Bienvenido!",
                  text:`${resApi}`
              })
          },
          error:(error:any)=>{
              console.log(error);
              Swal.fire({
                  icon:"warning",
                  title:"Formulario incorrecto!",
                  text:`${error.error.error}`
              })
          }

      })} else {
        Swal.fire({
        icon:"warning",
        title:"Formulario incorrecto!"
      })
      }
}
}
