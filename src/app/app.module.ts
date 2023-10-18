import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculasAltaComponent } from './components/peliculas/peliculas-alta/peliculas-alta.component';
import { PeliculasListadoComponent } from './components/peliculas/peliculas-listado/peliculas-listado.component';
import { ActoresListadoComponent } from './components/actor/actores-listado/actores-listado.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { FormsModule } from '@angular/forms';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { AltaComponent } from './components/actor/alta/alta.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PeliculasAltaComponent,
    PeliculasListadoComponent,
    ActoresListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    AltaComponent,
    TablaPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
