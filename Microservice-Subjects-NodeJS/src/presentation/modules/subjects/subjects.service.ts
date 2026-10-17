import { faker } from '@faker-js/faker';
import { Subject, SubjectArea } from '../../../domain/interfaces/subject.interface';

/**
 * Servicio encargado de la generación y gestión de materias.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar materias
 * ficticias, principalmente con fines de prueba o demostración.
 */
export class SubjectsService {

  /**
   * Nombres de materias disponibles.
   *
   * @remarks
   * Se utilizan para asignar secuencialmente un nombre
   * a cada materia generada.
   */
  private subjectsNames: string[] = [
    'Matemáticas',
    'Inglés',
    'Español',
    'Física',
    'Química',
    'Biología',
    'Historia',
    'Filosofía',
    'Tecnología',
    'Educación Física'
  ];

  /**
   * Áreas de conocimiento disponibles para las materias.
   *
   * @remarks
   * Se utilizan para asignar aleatoriamente un área
   * a cada materia generada.
   */
  private areas: SubjectArea[] = [
    'Ciencias Naturales',
    'Ciencias Sociales',
    'Humanidades',
    'Idiomas'
  ];

  /**
   * Obtiene un listado de materias generadas dinámicamente.
   *
   * @param countSubjects Cantidad de materias a generar
   * @returns Promesa que resuelve un arreglo de materias
   *
   * @example
   * ```ts
   * const subjects = await subjectsService.getAllSubjects(10);
   * ```
   */
  public async getAllSubjects(countSubjects: number): Promise<Subject[]> {
    const subjects: Promise<Subject>[] = [];

    for (let i = 1; i <= countSubjects; i++) {
      subjects.push(this.generateSubject(i));
    }

    return Promise.all(subjects);
  }

  /**
   * Genera una materia ficticia.
   *
   * @param id Identificador único de la materia
   * @returns Promesa que resuelve una materia generada
   */
  private generateSubject(id: number): Promise<Subject> {
    return Promise.resolve({
      id,
      name: this.subjectsNames[(id - 1) % this.subjectsNames.length]!,
      credits: faker.number.int({ min: 1, max: 5 }),
      area: faker.helpers.arrayElement(this.areas),
      teacher: faker.person.fullName(),
    });
  }
}
