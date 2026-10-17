/**
 * Interfaz que representa una materia.
 *
 * Contiene la información básica necesaria para mostrar una materia
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada materia debe tener un `id` único, un `name` descriptivo,
 * una cantidad de `credits`, un `teacher` asignado y un `area` válida.
 *
 * @example
 * ```ts
 * const materia: Subject = {
 *   id: 1,
 *   name: 'Matemáticas',
 *   credits: 4,
 *   area: 'Ciencias Naturales',
 *   teacher: 'Carlos Ramírez'
 * };
 * ```
 */
export interface Subject {
    /** Identificador único de la materia */
    id: number;

    /** Nombre de la materia */
    name: string;

    /** Cantidad de créditos de la materia */
    credits: number;

    /** Área de conocimiento de la materia */
    area: SubjectArea;

    /** Docente que imparte la materia */
    teacher: string;
}

/**
 * Tipo de área de conocimiento de una materia.
 *
 * @remarks
 * Este tipo restringe las áreas a los valores predefinidos:
 * - 'Ciencias Naturales'
 * - 'Ciencias Sociales'
 * - 'Humanidades'
 * - 'Idiomas'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const area: SubjectArea = 'Idiomas';
 * ```
 */
export type SubjectArea = 'Ciencias Naturales' | 'Ciencias Sociales' | 'Humanidades' | 'Idiomas';
