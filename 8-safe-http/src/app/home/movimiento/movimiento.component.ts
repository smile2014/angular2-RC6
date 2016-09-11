import { Component, OnInit } from '@angular/core';


import { MovimientosService } from './shared/movimientos.service'
import { MovimientoModel } from './shared/movimiento.model'

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
  hanCambiadoLosDatos: MovimientoModel = null;
  totales: any = {};
  constructor(private movimientosService: MovimientosService) {
    
  }

  ngOnInit() {
    this.leerTotales();
  }

  alSeleccionarMovimiento(movimiento: MovimientoModel) {
    // este método se invoca cuando alguien selecciona un movimiento desde el subcomponente lista
    // el movimiento seleccionado se envía hacia el subcomponente de edición
    this.movimientoSeleccionado = movimiento
  }

  alActualizarDatos(nuevosDatos: MovimientoModel) {
    this.hanCambiadoLosDatos = nuevosDatos;
    this.leerTotales();
  }

  leerTotales() {
    this.movimientosService.leerTotales()
      .subscribe(res => {
        // durante la suscripción se obtienen y transforman los datos
        if (res.status == 200)
          this.totales = res.json() || []
        else
          console.error(JSON.stringify(res));
      })
  }
}

