/**
 * Módulo ráiz de la aplicación
 * Importa al resto de módulos
 * configura este módulo y sus dependencias
 */

// en el módulo principal de Angular 2 viene el decorador de módulos
import {NgModule} from '@angular/core'
// diversos módulos que vayan siendo necesarios
import {BrowserModule} from "@angular/platform-browser";

// el componente (el elemento html app) raiz de la aplicación
import {AppComponent} from "./app";


// usa el decorador para crear y configurar el módulo raiz  
@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule],
  bootstrap   : [AppComponent]
})
export class AppModule {
  /**
   * esta clase es el soporte lógico para un módulo
   * el decorador trabaja sobre ella inyectándole dependencias...
   */
}
