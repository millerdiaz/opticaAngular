import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CatalogoComponent } from './components/public/catalogo/catalogo.component';
import { ProductsComponent } from './components/public/products/products.component';
import { DescripcionComponent } from './component/descripción/descripcion.component';
import { PagoConfirmadoComponent } from './component/pago-confirmado/pago-confirmado.component';

export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'catalogo',component:CatalogoComponent},
  {path:'products',component:ProductsComponent},
  {path:'descripcion',component:DescripcionComponent},
  {path:'pago-confirmado',component:PagoConfirmadoComponent},
  {path:'',pathMatch:'full', redirectTo:'home'}
];
