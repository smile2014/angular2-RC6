import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { FormsModule }   from '@angular/forms';


import { MovimientoComponent }   from './movimiento/movimiento.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [MovimientoComponent],// exportación del componente movimiento
  declarations: [MovimientoComponent],
  providers: [],
})
export class HomeModule { }
