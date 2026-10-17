/**
 * Interfaz que representa un grado escolar.
 *
 * Contiene la información básica necesaria para exponer un grado
 * a través de la API REST.
 *
 * @remarks
 * Cada grado debe tener un `id` único, un `name` que corresponde
 * a un nivel escolar válido, un `director` de grupo, una cantidad
 * de estudiantes (`studentsCount`) y una `jornada` definida.
 *
 * @example
 * ```ts
 * const grado: Grade = {
 *   id: 1,
 *   name: 'Sexto',
 *   director: 'Carlos Ramírez',
 *   studentsCount: 32,
 *   jornada: 'Mañana'
 * };
 * ```
 */
export interface Grade {
    /** Identificador único del grado */
    id: number;

    /** Nombre o nivel escolar del grado */
    name: GradeLevel;

    /** Director de grupo del grado */
    director: string;

    /** Cantidad de estudiantes matriculados en el grado */
    studentsCount: number;

    /** Jornada en la que se imparte el grado */
    jornada: Jornada;
}

/**
 * Tipo de nivel escolar de un grado.
 *
 * @remarks
 * Este tipo restringe los grados a los niveles predefinidos:
 * - 'Primero'
 * - 'Segundo'
 * - 'Tercero'
 * - 'Cuarto'
 * - 'Quinto'
 * - 'Sexto'
 * - 'Séptimo'
 * - 'Octavo'
 * - 'Noveno'
 * - 'Décimo'
 * - 'Once'
 *
 * @example
 * ```ts
 * const nivel: GradeLevel = 'Décimo';
 * ```
 */
export type GradeLevel =
  | 'Primero'
  | 'Segundo'
  | 'Tercero'
  | 'Cuarto'
  | 'Quinto'
  | 'Sexto'
  | 'Séptimo'
  | 'Octavo'
  | 'Noveno'
  | 'Décimo'
  | 'Once';

/**
 * Tipo de jornada de un grado.
 *
 * @remarks
 * Este tipo restringe las jornadas a los valores predefinidos:
 * - 'Mañana'
 * - 'Tarde'
 * - 'Única'
 *
 * Se utiliza principalmente para asignar una jornada
 * a cada grado generado.
 *
 * @example
 * ```ts
 * const jornada: Jornada = 'Tarde';
 * ```
 */
export type Jornada = 'Mañana' | 'Tarde' | 'Única';
