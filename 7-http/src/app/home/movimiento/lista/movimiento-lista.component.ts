
import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { MovimientosService } from '../shared/movimientos.service';
import { MovimientoModel } from '../shared/movimiento.model';

@Component({
  selector: 'movimiento-lista',
  templateUrl: 'movimiento-lista.component.html',
  styleUrls: ['movimiento-lista.component.css', '../movimiento.component.css']
})

/** la suscripción a los cambios hace que  */  
export class MovimientoListaComponent implements OnInit, OnChanges {
  movimientos: MovimientoModel[] = []
  @Output() editarMovimiento: EventEmitter<MovimientoModel> = new EventEmitter()
  @Input('actualizate') actualizate: MovimientoModel
  constructor(private movimientosService: MovimientosService) { }

  // El consumo de datos provenientes de observables
  // se hace en el ngOnInit para dar tiempo a que todo esté listo
  ngOnInit() {
    this.leerMovimientos();
  }

  ngOnChanges() {
    this.leerMovimientos();
  }

  fecha(cadena) {
    return new Date(cadena)
  }

  editar(movimiento: MovimientoModel) {
    this.editarMovimiento.emit(movimiento);
  }

  leerMovimientos() {
    // Los observables emiten eventos a los que hay que suscribirse
    this.movimientosService.leerMovimientos()
      .subscribe(res => {
        // durante la suscripción se obtienen y transforman los datos
        if (res.status == 200)
          this.movimientos = res.json() || [];
        else
          console.error(JSON.stringify(res));
      })
  }
}