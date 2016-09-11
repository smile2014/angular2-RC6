import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: 'saludo.component.html'
})
export class SaludoComponent implements OnInit {
  /**
   * las propiedades de esta clase son enlazables desde la plantilla
   */
  titulo: string = "Hola Aprendiz"; // un texto para mostrar
  visible: boolean = false; // un indicador mara mostrar y ocultar elementos
  avanzado: boolean = false; // un indicador de lógica
  
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

  /**
   * Una función definidad en la clase es un 
   * método llamable desde un evento de la vista
   */
  decirAdios() {
    // acceso a las propiedades mediante this
    this.visible = false;
    this.avanzado = true;
    this.titulo = "Empieza el movimiento!!!"; // Los cambios se reflejan automáticamente
  }
}