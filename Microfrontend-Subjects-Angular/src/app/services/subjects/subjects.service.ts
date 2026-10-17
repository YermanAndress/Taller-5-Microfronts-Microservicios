import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from '../../interfaces/subjects.interface';

/**
 * Servicio encargado de la gestión de materias.
 *
 * Proporciona métodos para obtener información de materias
 * desde la API REST.
 *
 * @example
 * ```ts
 * constructor(private subjectsService: SubjectsService) {}
 *
 * this.subjectsService.getAllSubjects(10).subscribe(subjects => {
 *   console.log(subjects);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class SubjectsService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de materias desde el backend.
   *
   * @param countSubjects Número de materias a obtener.
   * @returns Observable que emite un array de materias.
   *
   * @example
   * ```ts
   * this.subjectsService.getAllSubjects(5).subscribe(subjects => {
   *   console.log(subjects);
   * });
   * ```
   */
  getAllSubjects(countSubjects: number): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(`http://localhost:3004/api/subjects/${countSubjects}`);
  }
}
