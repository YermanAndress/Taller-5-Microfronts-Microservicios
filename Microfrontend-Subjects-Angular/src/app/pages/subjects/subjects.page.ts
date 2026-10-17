import { Component, inject } from '@angular/core';
import { SubjectsTableComponent } from '../../components/subjects-table/subjects-table.component';
import { Subject } from '../../interfaces/subjects.interface';
import { SubjectsService } from '../../services/subjects/subjects.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de materias.
 *
 * Se utiliza para gestionar y mostrar un listado de materias
 * utilizando el componente `SubjectsTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `SubjectsService`
 * para obtener las materias y pasarlas al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-subjects',
  templateUrl: `./subjects.page.html`,
  imports: [SubjectsTableComponent, AlertComponent]
})
export class SubjectsPage {
  /**
   * Listado de materias obtenidas desde el servicio.
   * @type {Subject[]}
   */
  subjects: Subject[] = [];
  /**
     * Estado actual del componente.
     *
     * @default 'init'
     */
    state: State = 'init';
  

  /**
   * Servicio para obtener materias.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private subjectsService = inject(SubjectsService);

  /**
   * Inicializa el componente y carga las materias.
   * @remarks
   * Se suscribe al método `getAllSubjects()` del servicio y
   * asigna los datos recibidos a la propiedad `subjects`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.subjectsService.getAllSubjects(10).subscribe({
      next: (subjects) => {
        this.subjects = subjects;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}
