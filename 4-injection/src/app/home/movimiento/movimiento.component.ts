import { Component, OnInit } from '@angular/core';
// importar clases o interfaces
import { MovimientosService } from './shared/movimientos.service'

@Component({
  selector: 'movimiento',
  templateUrl: 'movimiento.component.html',
  styleUrls: ['movimiento.component.css']
})
export class MovimientoComponent implements OnInit {
   // nos quedamos con las propiedades exclusivas de la vista
  movimiento: any
  sentidoOrden: number = 1


  /** 3 declarar el servicio en constructor para su inyección*/
  constructor(private movimientosService: MovimientosService) {
  }

  ngOnInit() {
     this.movimiento = {
       _id: new Date().toDateString(),
       tipo: "Ingreso",
       categoria: "Nómina",
       fecha: new Date(),
       importe: 0
     }
  }

  guardarMovimiento() {
    // 4 usar servicio
    this.movimientosService.guardarMovimiento(this.movimiento)
  }

  ordenarPor(campo: string) {
    this.sentidoOrden = -1 * this.sentidoOrden
    this.movimientosService.ordenarPor(campo, this.sentidoOrden)
  }

  // TODO: mover fuciones de utilidad a una clase inyectable en un fichero común
  fecha(cadena) {
    return new Date(cadena)
  }
}

