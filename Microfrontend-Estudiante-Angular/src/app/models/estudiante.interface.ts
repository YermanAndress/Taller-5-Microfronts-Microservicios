/** Estudiante tal como lo expone el Microservice-Estudiante-NodeJS. */
export interface Estudiante {
  id: number;
  codigo: string;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  /** Fecha en formato ISO (YYYY-MM-DD). */
  fechaNacimiento: string;
  promedio: number;
}