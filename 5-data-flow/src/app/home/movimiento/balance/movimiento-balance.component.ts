import { Component, OnInit, Input } from '@angular/core';
import { MovimientosService } from '../shared/movimientos.service';
import { MovimientoModel } from '../shared/movimiento.model';
@Component({
  selector: 'movimiento-balance',
  templateUrl: 'movimiento-balance.component.html'
})
export class MovimientoBalanceComponent implements OnInit {
 /**
  * los decoradores para declarar propiedades no siempre requieren parámetros
  */
  @Input('ingresos') ingresos: number
  @Input() gastos: number

  constructor() {}

  ngOnInit() {
  }
}