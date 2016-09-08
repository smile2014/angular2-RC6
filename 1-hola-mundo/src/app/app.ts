/**
 * componente raíz de la aplicación
 * que es un árbol de componentes
 */

// decorador para definir componentes
import {Component} from '@angular/core';

// usamos el decorador de forma similar a las directivas
@Component({
  selector   : 'app',
  templateUrl: './app.html',
})
export class AppComponent {
  /**
   * aquí va la lógica del controlador 
   */
}
