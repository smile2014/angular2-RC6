/**
 * Módulo funcional
 * creado a partir del snippet ng2-component
 */
import { Component, OnInit } from '@angular/core';

/** Su función decoradora */
@Component({
  selector: 'saludo',
  templateUrl: 'saludo.component.html'
})
/** La clase que exporta */  
export class SaludoComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}