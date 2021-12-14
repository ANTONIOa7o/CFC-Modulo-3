//Los módulos son las piezas mas grandes en las que se puede dividir una aplicación Angular.
//Son piezas que podemos reutilizar dentro de nuestro proyecto pero también podemos usarlas en otros proyectos.
//Angular nos ofrece módulos nativos como HTTP, Browser, Forms, Reactive Forms.
//Categorias de módulos:
//a.Nativos: provistos por Angular.
//b. terceros: realizados por otras personas y que nosotros podemos usar, siendo libres o pago.
//c. Propios: los que realicemos nosotros. -Para anotar nuestros módulos src/app/app.module.ts


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { TextoComponent } from './texto/texto.component';

//NgModule: Palabra reservada para declarar un Modulo, contiene 4 arrays:
//1. declarations: Lista de componentes
//2.imports: Lista de modulos
//3.providers: Lista de servicios
//4.boostrap: Componente de inicio
@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    TextoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
