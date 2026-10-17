import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { SubjectArea, Subject } from '../../interfaces/subjects.interface';

/**
 * Componente de tabla de materias.
 *
 * Se utiliza para mostrar un listado de materias en una tabla,
 * mostrando información como el nombre de la materia, el docente,
 * los créditos y un badge visual que indica el área de cada materia.
 *
 * @remarks
 * Este componente recibe las materias desde un componente padre
 * a través del Input `subjects` y utiliza el mapeo `areaMap`
 * para asignar colores a los badges según el área.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-subjects-table [subjects]="subjectsList"></app-subjects-table>
 * ```
 */
@Component({
  selector: 'app-subjects-table',
  templateUrl: './subjects-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class SubjectsTableComponent {
  /**
   * Listado de materias que se mostrarán en la tabla.
   * @type {Subject[]}
   * @remarks
   * Este Input permite pasar un array de materias desde un componente padre,
   * generalmente `SubjectsPage`. Cada materia debe cumplir la interfaz `Subject`.
   */
  @Input() subjects: Subject[] = [];
  /**
   * Mapeo de áreas de materias a tipos de Badge.
   * @type {Record<SubjectArea, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada área:
   * - 'Ciencias Naturales' → 'success' (verde)
   * - 'Ciencias Sociales' → 'warning' (amarillo)
   * - 'Humanidades' → 'primary' (azul)
   * - 'Idiomas' → 'danger' (rojo)
   *
   * Esto permite que en la tabla cada materia tenga un badge visual que indique su área
   * de forma clara para el usuario.
   */
  areaMap: Record<SubjectArea, BadgeType> = {
    'Ciencias Naturales': 'success',
    'Ciencias Sociales': 'warning',
    'Humanidades': 'primary',
    'Idiomas': 'danger',
  }
}
