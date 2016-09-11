import { NgModule } from '@angular/core';
/**
 * Importar los módulos de formularios y el común
 * Tiene las directivas fun damentales para
 * comunicar las vistas y los datos
 */
import { CommonModule } from "@angular/common";
import { FormsModule }   from '@angular/forms';

import { SaludoComponent }   from './saludo/saludo.component';
// Hay un nuevo componente en la aplicación
import { MovimientoComponent }   from './movimiento/movimiento.component';

// Registrar en este módulo a los otros módulos 
@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [SaludoComponent],
  declarations: [SaludoComponent, MovimientoComponent],
  providers: [],
})
export class HomeModule { }
