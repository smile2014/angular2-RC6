/**
 * creado a partir del snippet ng2-module  
 */
import { NgModule } from '@angular/core';
// Importar el módulo de formularios
import { FormsModule }   from '@angular/forms';

import { SaludoComponent }   from './saludo/saludo.component';
import { MovimientoComponent }   from './movimiento/movimiento.component';

// Registrar el módulo de formularios
@NgModule({
  imports: [FormsModule],
  exports: [SaludoComponent],
  declarations: [SaludoComponent, MovimientoComponent],
  providers: [],
})
export class HomeModule { }
