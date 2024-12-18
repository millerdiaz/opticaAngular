import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CatalogoComponent } from './components/public/catalogo/catalogo.component';
import { ProductsComponent } from './components/public/products/products.component';
import { CitasComponent } from './components/public/citas/citas.component';
import { DescripcionComponent } from './component/descripción/descripcion.component';
import { PromocionesComponent } from './components/public/promociones/promociones.component';

export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'catalogo',component:CatalogoComponent},
  {path:'products',component:ProductsComponent},
  {path: 'citas', component:CitasComponent},
  {path:'descripcion',component:DescripcionComponent},
  {path: 'promociones', component:PromocionesComponent},
  {path:'',pathMatch:'full', redirectTo:'home'}
];
