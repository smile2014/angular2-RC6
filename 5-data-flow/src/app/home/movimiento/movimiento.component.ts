import { Component, OnInit } from '@angular/core';

import { MovimientosService } from './shared/movimientos.service'
import { MovimientoModel } from './shared/movimiento.model'


@Component({
  selector: 'movimiento',
  templateUrl: 'movimiento.component.html',
  styleUrls: ['movimiento.component.css']
})
export class MovimientoComponent implements OnInit {
   // el componente principal cada vez tiene menor contenido lógico

  movimientoSeleccionado = null // para comunicar los subcomponentes  
  
  constructor(private movimientosService: MovimientosService) {
    
  }

  ngOnInit() {
    
  }

  alSeleccionarMovimiento(movimiento: MovimientoModel) {
    // este método se invoca cuando alguien selecciona un movimiento desde el subcomponente lista
    // el movimiento seleccionado se envía hacia el subcomponente de edición
    this.movimientoSeleccionado = movimiento
  }
}

