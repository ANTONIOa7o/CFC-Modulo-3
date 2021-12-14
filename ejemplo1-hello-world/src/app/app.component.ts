


//Un módulo en un app, tiene una entidad propia y puede estar compuesto por más cosas como componentes. 
//Cada vista debería ser un componente, y está puede o no, componerse por otros componentes
//, dependiendo de l acomplejidad,profundidad y la reutilización de código

import { Component } from '@angular/core';
// @Component: Palabra reservada para declarar un componente, contiene varios elementos: 
//*selector: Tagde HTML para insertar el componente *
//templateUrl: Archivo HTML que va a usar el componente *
//styleUrls: Archivos CSS que usará el template
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = 'Toño';
}
