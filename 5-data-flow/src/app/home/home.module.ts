import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { FormsModule }   from '@angular/forms';

import { MovimientoComponent }   from './movimiento/movimiento.component';
import { MovimientosService }   from './movimiento/shared/movimientos.service';
/**
 * 1. Importación de los componentes recién creados
 */
import { MovimientoEditorComponent }   from './movimiento/editor/movimiento-editor.component';
import { MovimientoListaComponent }   from './movimiento/lista/movimiento-lista.component';
import { MovimientoBalanceComponent }   from './movimiento/balance/movimiento-balance.component';

/**
 * 2. los registra como declaraciones
 */
@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [MovimientoComponent], // no se exportan los compoentes internos, sólo se declaran
  declarations: [MovimientoComponent, MovimientoEditorComponent, MovimientoListaComponent, MovimientoBalanceComponent],
  providers: [MovimientosService] 
})
export class HomeModule { }
