import { Component, inject } from '@angular/core';
import { GradesTableComponent } from '../../components/grades-table/grades-table.component';
import { Grade } from '../../interfaces/grades.interface';
import { GradesService } from '../../services/grades/grades.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de grados.
 *
 * Se utiliza para gestionar y mostrar un listado de grados
 * utilizando el componente `GradesTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `GradesService`
 * para obtener los grados y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-grades',
  templateUrl: `./grades.page.html`,
  imports: [GradesTableComponent, AlertComponent]
})
export class GradesPage {
  /**
   * Listado de grados obtenidos desde el servicio.
   * @type {Grade[]}
   */
  grades: Grade[] = [];
  /**
     * Estado actual del componente.
     *
     * @default 'init'
     */
    state: State = 'init';
  

  /**
   * Servicio para obtener grados.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private gradesService = inject(GradesService);

  /**
   * Inicializa el componente y carga los grados.
   * @remarks
   * Se suscribe al método `getAllGrades()` del servicio y
   * asigna los datos recibidos a la propiedad `grades`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.gradesService.getAllGrades(10).subscribe({
      next: (grades) => {
        this.grades = grades;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}
