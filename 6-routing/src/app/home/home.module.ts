import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { FormsModule }   from '@angular/forms';


import { MovimientoComponent }   from './movimiento/movimiento.component';
import { MovimientosService }   from './movimiento/shared/movimientos.service';
// el módulo carga los subcomponentes
import { MovimientoEditorComponent }   from './movimiento/editor/movimiento-editor.component';
import { MovimientoListaComponent }   from './movimiento/lista/movimiento-lista.component';
import { MovimientoBalanceComponent }   from './movimiento/balance/movimiento-balance.component';

// y los registra como declaraciones
@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [MovimientoComponent],
  declarations: [MovimientoComponent, MovimientoEditorComponent, MovimientoListaComponent, MovimientoBalanceComponent],
  providers: [MovimientosService] // los servicios se registran como proveedores
})
export class HomeModule { }