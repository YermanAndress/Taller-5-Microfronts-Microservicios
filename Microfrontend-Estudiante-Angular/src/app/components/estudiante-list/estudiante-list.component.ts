import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { Estudiante } from '../../models/estudiante.interface';
import { EstudianteService } from '../../services/estudiante.service';

/** Muestra la lista de estudiantes con búsqueda por nombre, apellido o código. */
@Component({
  selector: 'app-estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrl: './estudiante-list.component.scss',
})
export class EstudianteListComponent implements OnInit {
  private readonly estudianteService = inject(EstudianteService);

  /** Estudiantes recibidos desde la API. */
  readonly estudiantes = signal<Estudiante[]>([]);
  /** Indica si hay una petición en curso. */
  readonly cargando = signal(true);
  /** Mensaje de error, o null si no hay error. */
  readonly error = signal<string | null>(null);
  /** Texto escrito en el buscador. */
  readonly termino = signal('');

  /** Estudiantes que coinciden con el término de búsqueda. */
  readonly estudiantesFiltrados = computed(() => {
    const t = this.termino().trim().toLowerCase();
    if (!t) {
      return this.estudiantes();
    }
    return this.estudiantes().filter((e) =>
      `${e.nombre} ${e.apellido} ${e.codigo}`.toLowerCase().includes(t),
    );
  });

  ngOnInit(): void {
    this.cargar();
  }

  /** Solicita los estudiantes al microservicio. */
  cargar(): void {
    this.cargando.set(true);
    this.error.set(null);
    this.estudianteService.obtenerTodos().subscribe({
      next: (datos) => {
        this.estudiantes.set(datos);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set('No se pudo cargar la lista de estudiantes.');
        this.cargando.set(false);
      },
    });
  }

  /** Actualiza el término de búsqueda a partir del evento del input. */
  buscar(event: Event): void {
    this.termino.set((event.target as HTMLInputElement).value);
  }
}