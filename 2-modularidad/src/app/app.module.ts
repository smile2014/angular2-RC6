/**
 * Módulo ráiz de la aplicación
 * Importa al resto de módulos
 * configura este módulo y sus dependencias
 */

import {NgModule} from '@angular/core'
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";

// Importar el nuevo módulo
import {HomeModule} from "./home/home.module"

// declarar la importación de este módulo 
@NgModule({
  declarations: [AppComponent], // componentes que necesita
  imports     : [BrowserModule, HomeModule], // Módulos de los que depende
  bootstrap: [AppComponent], // Sólo en el caso raiz
})
export class AppModule {

}
