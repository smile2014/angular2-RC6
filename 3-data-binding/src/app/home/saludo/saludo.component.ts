/**
 * creado a partir del snippet ng2-component  
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: 'saludo.component.html'
})
export class SaludoComponent implements OnInit {
  // las propiedades de esta clase son enlazables desde la plantilla
  titulo: string = "Hola Aprendiz";
  visible: boolean = false;
  avanzado: boolean = false;
  
  constructor() { 
    /** Aquí no debe ir lógica.
     *se usará para dependencias
     */
  }

  ngOnInit() { 
    /**
     * aquí irá la lógica de inicio
     */
  } 

  // metodo llamable desde un evento de la vista
  decirAdios() {
    // acceso a las propiedades mediante this
    this.visible = false;
    this.avanzado = true;
    this.titulo = "Empieza el movimiento!!!";
  }
}