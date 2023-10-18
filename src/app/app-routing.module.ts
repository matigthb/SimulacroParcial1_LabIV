import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculasAltaComponent } from './components/peliculas/peliculas-alta/peliculas-alta.component';
import { PeliculasListadoComponent } from './components/peliculas/peliculas-listado/peliculas-listado.component';
import { AltaComponent } from './components/actor/alta/alta.component';
import { ActoresListadoComponent } from './components/actor/actores-listado/actores-listado.component';

const routes: Routes = [
  {path:'busqueda',component:BusquedaComponent},
  {path:'',redirectTo: "busqueda", pathMatch: "full"},
  {path:'peliculas/alta',component:PeliculasAltaComponent},
  {path:'peliculas/listado',component:PeliculasListadoComponent},
  {path:'actor/alta',component:AltaComponent},
  {path:'actor/listado',component:ActoresListadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
