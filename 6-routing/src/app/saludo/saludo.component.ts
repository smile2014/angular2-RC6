import { Component, OnInit } from '@angular/core';

/** Para tratar con parámetros */
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'saludo',
  templateUrl: 'saludo.component.html'
})
export class SaludoComponent implements OnInit {
  amigo: string = "desconocido";

  constructor(private activatedRoute: ActivatedRoute) {
    // Idealmente sólo se usa para declarar dependencias
  }
  
  /**
   * Mejor programar en oInit
   */
  ngOnInit() {
    this.activatedRoute.params.subscribe(parametros => {
      this.amigo = parametros['amigo'] || 'anónimo';
    });
   }
}