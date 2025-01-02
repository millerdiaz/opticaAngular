import { Component, HostListener } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router : Router) {}
  estado!: boolean

  ngOnInit () {
      if(sessionStorage.getItem('token')){
          this.estado = true
      }else {
          this.estado = false
      }
  }

  ngDoCheck() {
      this.ngOnInit()
  }

  logout() {
      sessionStorage.clear()
      this.router.navigate(['home'])
      this.ngOnInit ()
  }
  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {

    this.isScrolled = window.scrollY > 600;
  }
}
