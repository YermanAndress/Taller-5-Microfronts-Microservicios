import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grade } from '../../interfaces/grades.interface';

/**
 * Servicio encargado de la gestión de grados.
 *
 * Proporciona métodos para obtener información de grados
 * desde la API REST.
 *
 * @example
 * ```ts
 * constructor(private gradesService: GradesService) {}
 *
 * this.gradesService.getAllGrades(10).subscribe(grades => {
 *   console.log(grades);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class GradesService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de grados desde el backend.
   *
   * @param countGrades Número de grados a obtener.
   * @returns Observable que emite un array de grados.
   *
   * @example
   * ```ts
   * this.gradesService.getAllGrades(5).subscribe(grades => {
   *   console.log(grades);
   * });
   * ```
   */
  getAllGrades(countGrades: number): Observable<Grade[]> {
    return this.httpClient.get<Grade[]>(`http://localhost:3003/api/grades/${countGrades}`);
  }
}
