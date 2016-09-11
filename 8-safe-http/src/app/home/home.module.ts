import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
/** 1. importación del módulo de comunicaciones */
import {HttpModule} from "@angular/http";

import { MovimientoComponent }   from './movimiento/movimiento.component';
import { MovimientosService }   from './movimiento/shared/movimientos.service';

import { MovimientoEditorComponent }   from './movimiento/editor/movimiento-editor.component';
import { MovimientoListaComponent }   from './movimiento/lista/movimiento-lista.component';
import { MovimientoBalanceComponent }   from './movimiento/balance/movimiento-balance.component';
/** 2. registro del módulo de comunicaciones */
@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, HttpModule],
  exports: [MovimientoComponent],
  declarations: [MovimientoComponent, MovimientoEditorComponent, MovimientoListaComponent, MovimientoBalanceComponent],
  providers: [MovimientosService]
})
export class HomeModule { }
