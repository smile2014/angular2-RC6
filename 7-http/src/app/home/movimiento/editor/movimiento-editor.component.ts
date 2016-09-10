import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovimientosService } from '../shared/movimientos.service';
import { MovimientoModel } from '../shared/movimiento.model';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movimiento-editor',
  templateUrl: 'movimiento-editor.component.html'
})
export class MovimientoEditorComponent implements OnInit {
  /** 4 Cambios en las llamadas a los servicios  */

  @Input('movimientoParaEditar') movimiento: MovimientoModel

  @Output() actualizarDatos: EventEmitter<MovimientoModel> = new EventEmitter()
  maestros: any = {}

  constructor(private movimientosService: MovimientosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // La carga de maestros al iniciarse el componente
    this.movimientosService
      .leerMaestros()
      .subscribe(res => {
        this.maestros = res.json();
      })
    this.movimiento = this.nuevoMovimiento();
    this.activatedRoute.params.subscribe(parametros => {
      let movimientoId = parametros['id'] || null;
      //if(movimientoId) this.movimiento = this.movimientosService.obtenerMovimiento(movimientoId)
      if (movimientoId) {
        this.movimientosService
          .leerMovimientoPor_Id(movimientoId) // la llamda devuelve un observable al que debemos subscribirnos
          .subscribe(response => {
            // función tipo callback cuando vengan resultados
            if (response.status == 200) {
              this.movimiento = response.json() || this.nuevoMovimiento();
            }
            else
              console.error(JSON.stringify(response));
          })
      }
    });
  }

  guardarMovimiento() {
    // al enviar información también recibimos un observable
    // debemos suscribirnos para conocer el resultado
    this.movimientosService
      .guardarMovimiento(this.movimiento)
      .subscribe(response => {
        // hay que suscribirse para ejecutar la llamada
        // aunque no hiciesemos nada con el resultado
        if (response.status < 400)
          // emitir evento si no hubo error
          this.actualizarDatos.emit(response.json());
        else
          console.error(JSON.stringify(response));
      })
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