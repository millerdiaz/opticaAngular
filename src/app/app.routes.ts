import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CatalogoComponent } from './components/public/catalogo/catalogo.component';
import { ProductsComponent } from './components/public/products/products.component';
import { CitasComponent } from './components/public/citas/citas.component';

export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'catalogo',component:CatalogoComponent},
  {path:'products',component:ProductsComponent},
  {path: 'citas', component:CitasComponent},
  {path:'',pathMatch:'full', redirectTo:'home'}
];
