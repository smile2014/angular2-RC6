/**
 * componente raíz de la aplicación
 * que es un árbol de componentes
 * Cada componente resuelve un problema de pressentación
 * Tienen vista y lógica 
 */

// decorador para definir componentes
import {Component} from '@angular/core';

// usamos el decorador de forma similar a las directivas
@Component({
  selector   : 'app', // nombre por el que se le conocerá en el html
  templateUrl: './app.component.html', // ruta hacia su plantilla de vista
})
export class AppComponent {
  /**
   * aquí irá la lógica del controlador 
   */
}
