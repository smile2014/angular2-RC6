/**
 * Módulo ráiz de la aplicación
 * Importa al resto de módulos
 * configura este módulo y sus dependencias
 */

import {NgModule} from '@angular/core'
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app";

// Importar el nuevo módulo
import {HomeModule} from "./home/home.module"

// declarar la importación de este módulo 
@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule, HomeModule],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
