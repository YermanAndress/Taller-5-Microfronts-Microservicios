import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Jornada, Grade } from '../../interfaces/grades.interface';

/**
 * Componente de tabla de grados.
 *
 * Se utiliza para mostrar un listado de grados en una tabla,
 * mostrando información como el nombre del grado, el director
 * de grupo, la cantidad de estudiantes y un badge visual que
 * indica la jornada de cada grado.
 *
 * @remarks
 * Este componente recibe los grados desde un componente padre
 * a través del Input `grades` y utiliza el mapeo `jornadaMap`
 * para asignar colores a los badges según la jornada.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-grades-table [grades]="gradesList"></app-grades-table>
 * ```
 */
@Component({
  selector: 'app-grades-table',
  templateUrl: './grades-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class GradesTableComponent {
  /**
   * Listado de grados que se mostrarán en la tabla.
   * @type {Grade[]}
   * @remarks
   * Este Input permite pasar un array de grados desde un componente padre,
   * generalmente `GradesPage`. Cada grado debe cumplir la interfaz `Grade`.
   */
  @Input() grades: Grade[] = [];
  /**
   * Mapeo de jornadas de grados a tipos de Badge.
   * @type {Record<Jornada, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada jornada:
   * - 'Mañana' → 'warning' (amarillo)
   * - 'Tarde' → 'success' (verde)
   * - 'Única' → 'primary' (azul)
   *
   * Esto permite que en la tabla cada grado tenga un badge visual que indique su jornada
   * de forma clara para el usuario.
   */
  jornadaMap: Record<Jornada, BadgeType> = {
    'Mañana' : 'warning',
    'Tarde': 'success',
    'Única': 'primary',
  }
}
