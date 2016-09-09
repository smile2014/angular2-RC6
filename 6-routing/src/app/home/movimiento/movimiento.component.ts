import { Component, OnInit } from '@angular/core';
// importar clases o interfaces
import { MovimientosService } from './shared/movimientos.service'
import { MovimientoModel } from './shared/movimiento.model'
// Importamos subcomponentes
// La aplicación se comporta como un árbol de componentes
import {MovimientoEditorComponent} from './editor/movimiento-editor.component'
import {MovimientoListaComponent} from './lista/movimiento-lista.component'
import {MovimientoBalanceComponent} from './balance/movimiento-balance.component'


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

