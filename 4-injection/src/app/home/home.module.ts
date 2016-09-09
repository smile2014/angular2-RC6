import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { FormsModule }   from '@angular/forms';


import { MovimientoComponent }   from './movimiento/movimiento.component';
// importar el servicio que será inyectado en el componente
import { MovimientosService }   from './movimiento/shared/movimientos.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [MovimientoComponent],
  declarations: [MovimientoComponent],
  providers: [MovimientosService] // los servicios se registran como proveedores
})
export class HomeModule { }
