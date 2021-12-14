import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'ejemplo2-binding';
  nombre: string = 'Toño';
  apellido: string = 'Cuadrado';

  habilitado: boolean = true;

  estilo = 'rojo';

  // El constructor es una funcion que se llama para crear objetos
  constructor(){
    setTimeout( () => {
      this.habilitado = false;
    }, 3000);
  }

  saludar():void{
    alert('Bienvenido a Angular !!!');
  }
}
