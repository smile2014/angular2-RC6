/**
 * Módulo raíz de la aplicación
 * Importa al resto de módulos, llamados de funcionalidad
 * Hay que configurar este módulo y sus dependencias
 */

// en el módulo principal de Angular 2 viene el decorador de módulos
import {NgModule} from '@angular/core'
// diversos módulos que vayan siendo necesarios
import {BrowserModule} from "@angular/platform-browser";

// el componente (el elemento html app) raíz de la aplicación
import {AppComponent} from "./app.component";


// usa el decorador para crear y configurar el módulo raiz  
@NgModule({
  declarations: [AppComponent], // coasa que se crean en este módulo
  imports     : [BrowserModule], // otros módulos que importa este
  bootstrap   : [AppComponent] // marca especial para autodeclararse raíz 
})
/** Esta exportación es la que se importa en main.browser.ts */  
export class AppModule {
  /**
   * esta clase es el soporte lógico para un módulo
   * el decorador trabaja sobre ella inyectándole dependencias...
   */
}
