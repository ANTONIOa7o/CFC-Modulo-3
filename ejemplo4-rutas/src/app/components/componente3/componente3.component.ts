import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  constructor(private ruta: ActivatedRoute) {
    // Recupero el parametro con el mismo nombre que lo declaro
    // en app.module.ts -> {path:'c3/:codigo', component: Componente3Component}
    console.log("Hotel: "+this.ruta.snapshot.params['codigo']);

    // Ejemplo de como recuperar los query params
    // [queryParams]="{entrada:'26/3/2021',salida:'27/3/2021',personas:2}"
    console.log("Fecha de Entrada: "+this.ruta.snapshot.queryParams.entrada);
    console.log("Fecha de Salidad: "+this.ruta.snapshot.queryParams['salida']);
    console.log("Nº de Personas"+this.ruta.snapshot.queryParams['personas']);
  }

  ngOnInit(): void {
  }

}
