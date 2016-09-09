/**
 * creado a partir del snippet ng2-module  
 */
import { NgModule } from '@angular/core';

import { SaludoComponent }   from './saludo/saludo.component';

@NgModule({
  imports: [],
  exports: [SaludoComponent], // Componentes que exporta
  declarations: [SaludoComponent],
  providers: [],
})
export class HomeModule { }
