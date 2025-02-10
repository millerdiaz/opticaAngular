import { Component, HostListener } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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
  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {

    this.isScrolled = window.scrollY > 600;
  }

  menuActive: boolean = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;

    if (this.menuActive) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }


}
