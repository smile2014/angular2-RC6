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
import { RouterModule, Routes} from '@angular/router';

import {AppComponent} from "./app.component";

/**
 * Modulos de funcionalidad
 * asimilables a páginas o segmentos de url
*/
import {HomeModule} from "./home/home.module"
import {AcercaDeModule} from "./acerca-de/acerca-de.module"
import {SaludoModule} from "./saludo/saludo.module"
/**
 * Componentes que se visualizarán en cada ruta
 */
import {MovimientoComponent} from "./home/movimiento/movimiento.component"
import {AcercaDeComponent} from "./acerca-de/acerca-de.component"
import {SaludoComponent} from "./saludo/saludo.component"
import {MovimientoEditorComponent} from "./home/movimiento/editor/movimiento-editor.component"

/** Se necesitan para montar las rutas */
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },//ruta base
  { path: 'home', component: MovimientoComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'about', redirectTo: 'acerca-de' }, //redirecciones
  { path: 'saludo', component: SaludoComponent },
  { path: 'saludo/:amigo', component: SaludoComponent },//parametros
  { path: 'movimientos/:id', component: MovimientoEditorComponent },
 ];
/** en el módulo principal se registra un módulo especial */
const routerModule = RouterModule.forRoot(routes) // <-- routes

@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule, HomeModule, AcercaDeModule, SaludoModule ,routerModule],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
