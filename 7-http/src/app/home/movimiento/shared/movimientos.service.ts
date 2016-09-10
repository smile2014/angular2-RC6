/**
 * servicio para ser inyectado en componentes
 */

import { Injectable } from '@angular/core';

/** 3 Importar objetos de la librería http */
import { Http, Response, RequestOptions, Headers } from '@angular/http';

// Importar la clase Observable de la librería Reactive Extensions
import { Observable }     from 'rxjs/Observable';

import { MovimientoModel } from './movimiento.model'

@Injectable()
export class MovimientosService {
  /** 4 usar el servicio http */

  // debemos acostumbrarnos a que el api no esté junto a los ficheros
  urlBase: string = 'http://localhost:4000'

  // Reclamar la dependencia sobre http  
  // Se registra en la raíz, pues se le supone un uso común a varios objetos
  constructor(private http: Http) {
  }

  // Se devuelven Observables de tipos concretos   
  leerMaestros(): Observable<Response> {
    // las llamadas devuelven observables
    // ocultan la definción de la ruta y demás
    return this.http.get(`${this.urlBase}/maestros`)
  }
  
  guardarMovimiento(movimiento): Observable<Response> {
    // Los envíos de información deben configurarse a mano
    // esto es fácilmente generalizable y reutilizable
    let body = JSON.stringify(movimiento); // el envío es en forma de string
    let headers = new Headers({ 'Content-Type': 'application/json' }); // debe especificarse el formato
    let options = new RequestOptions({ headers: headers }); 
    // declarar la llamada y retornar el observable
    if (movimiento._id !== '' && movimiento._id !== '_') {
      // Actualizar
      return this.http
        .put(`${this.urlBase}/movimientos/${movimiento._id}`, body, options)
    }
    else {
      // insertar
      return this.http
        .post(`${this.urlBase}/movimientos`, body, options)
    }
  }

  // El resto de llamadas son simples copias de las anteriores
  leerMovimientos(): Observable<Response> {
    return this.http
      .get(`${this.urlBase}/movimientos`)
  }
  leerMovimientoPor_Id(_id): Observable<Response> {
    return this.http
      .get(`${this.urlBase}/movimientos/${_id}`)
  }
  leerTotales() : Observable<Response> {
    return this.http
      .get(`${this.urlBase}/movimientos/totales`)
  }

}
