import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Estudiante } from '../models/estudiante.interface';

/** Consume la API REST del microservicio de estudiantes. */
@Injectable({ providedIn: 'root' })
export class EstudianteService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/estudiantes`;

  /** Obtiene la lista completa de estudiantes. */
  obtenerTodos(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.apiUrl);
  }

  /**
   * Obtiene un estudiante por su id.
   * @param id Identificador del estudiante.
   */
  obtenerPorId(id: number): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.apiUrl}/${id}`);
  }
}