import { faker } from '@faker-js/faker';
import { Grade, GradeLevel, Jornada } from '../../../domain/interfaces/grade.interface';

/**
 * Servicio encargado de la generación y gestión de grados.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar grados
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class GradesService {

  /**
   * Niveles escolares disponibles para los grados.
   *
   * @remarks
   * Se utilizan para asignar secuencialmente un nivel
   * a cada grado generado.
   */
  private levels: GradeLevel[] = [
    'Primero',
    'Segundo',
    'Tercero',
    'Cuarto',
    'Quinto',
    'Sexto',
    'Séptimo',
    'Octavo',
    'Noveno',
    'Décimo',
    'Once'
  ];

  /**
   * Jornadas disponibles para los grados.
   *
   * @remarks
   * Se utilizan para asignar aleatoriamente una jornada
   * a cada grado generado.
   */
  private jornadas: Jornada[] = [
    'Mañana',
    'Tarde',
    'Única'
  ];

  /**
   * Obtiene un listado de grados generados dinámicamente.
   *
   * @param countGrades Cantidad de grados a generar
   * @returns Promesa que resuelve un arreglo de grados
   *
   * @example
   * ```ts
   * const grades = await gradesService.getAllGrades(10);
   * ```
   */
  public async getAllGrades(countGrades: number): Promise<Grade[]> {
    const grades: Promise<Grade>[] = [];

    for (let i = 1; i <= countGrades; i++) {
      grades.push(this.generateGrade(i));
    }

    return Promise.all(grades);
  }

  /**
   * Genera un grado ficticio.
   *
   * @param id Identificador único del grado
   * @returns Promesa que resuelve un grado generado
   */
  private generateGrade(id: number): Promise<Grade> {
    return Promise.resolve({
      id,
      name: this.levels[(id - 1) % this.levels.length]!,
      director: faker.person.fullName(),
      studentsCount: faker.number.int({ min: 15, max: 40 }),
      jornada: faker.helpers.arrayElement(this.jornadas),
    });
  }
}
