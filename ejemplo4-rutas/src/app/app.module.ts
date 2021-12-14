import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
/*1.- El ROUTES en Angular nos permite implementar navegación en nuestra aplicación, podemos asignar
 vistas/componentes específicos para cada url que deseemos. Routingnos permite enviar y recibir parámetros.
*/
/*2.-RouterModule Para poder agregar un nuevo componente que va a tener su propia ruta asignada necesito
 el modulo
 de RouterModule. Importo RouterModule en app.module.ts*/

import { AppComponent } from './app.component';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { Componente3Component } from './components/componente3/componente3.component';


// Array de rutas, tiene que estar fuera del modulo @NgModule
const misRutas: Routes = [
  {path:'c1', component: Componente1Component},
  {path:'c2', component: Componente2Component},
  {path:'c3/:codigo', component: Componente3Component},//Parámetros en Rutas -Ruta/:parametro
  {path:'inicio', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(misRutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
