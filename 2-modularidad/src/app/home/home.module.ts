/**
 * Módulo de funcionalidad
 * creado a partir del snippet ng2-module
 */
import { NgModule } from '@angular/core';

/** Importa el componente que declara y que luego exporta */
import { SaludoComponent }   from './saludo/saludo.component';

/** declara sus propias dependencias, exportaciones... */
@NgModule({
  imports: [], // no depende de ningún otro módulo
  exports: [SaludoComponent], // Componentes que exporta
  declarations: [SaludoComponent], // Componete que el mismo declara
  providers: [], // servicios que usa
})
/** No suelen tener lógica programada, son simples contenedores */  
export class HomeModule { }
