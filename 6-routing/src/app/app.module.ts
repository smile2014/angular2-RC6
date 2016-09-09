/**
 * Módulo ráiz de la aplicación
 * Importa al resto de módulos
 * configura este módulo y sus dependencias
 */

import {NgModule} from '@angular/core'
import {BrowserModule} from "@angular/platform-browser";

/**
 * servicios en la librería rouoter
 */
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from "./app.component";

/**
 * Modulos de funcionalidad
 * asimilables a páginas o segmentos de url
*/
import {HomeModule} from "./home/home.module"
import {AcercaDeModule} from "./acerca-de/acerca-de.module"
/**
 * Componentes que se visualizarán en cada ruta
 */
import {MovimientoComponent} from "./home/movimiento/movimiento.component"
import {AcercaDeComponent} from "./acerca-de/acerca-de.component"



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MovimientoComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'about', redirectTo: 'acerca-de' }
 ];

let router = RouterModule.forRoot(routes) // <-- routes

@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule, HomeModule, AcercaDeModule, router],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
