/**
 * si no son servicios
 * no hay necesidad de inyectarlos
 * basta con exportarlos
 */

// las clases de modelo también debe estar en zonas comunes
export class MovimientoModel {
  _id: string;
  tipo: string
  categoria: string
  fecha: Date
  importe: number
}