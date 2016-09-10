import { Component, OnInit, Input } from '@angular/core';
import { MovimientosService } from '../shared/movimientos.service';
import { MovimientoModel } from '../shared/movimiento.model';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movimiento-editor',
  templateUrl: 'movimiento-editor.component.html'
})
export class MovimientoEditorComponent implements OnInit {

  @Input('movimientoParaEditar') movimiento: MovimientoModel
  
  constructor(private movimientosService: MovimientosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.movimiento = this.nuevoMovimiento();
    this.activatedRoute.params.subscribe(parametros => {
      let movimientoId = parametros['id'] || null;
      if(movimientoId) this.movimiento = this.movimientosService.obtenerMovimiento(movimientoId)
    });
  }

  guardarMovimiento() {
    this.movimientosService.guardarMovimiento(this.movimiento);
    this.movimiento = this.nuevoMovimiento();
  }

  nuevoMovimiento() {
    return {
        _id: '',
        tipo: "Ingreso",
        categoria: "Nómina",
        fecha: new Date(),
        importe: 0
      }
  }
}