const { fakerES: faker } = require('@faker-js/faker');

/**
 * Servicio de estudiantes. Genera datos simulados con Faker.js
 * y los mantiene en memoria mientras el servidor está activo.
 */
class EstudianteService {
  /**
   * @param {number} cantidad Número de estudiantes a generar.
   */
  constructor(cantidad = 20) {
    // Semilla fija: los datos son reproducibles entre reinicios.
    faker.seed(123);
    this.estudiantes = Array.from({ length: cantidad }, (_, i) => this.generar(i + 1));
  }

  /**
   * Genera un estudiante simulado.
   * @param {number} id Identificador del estudiante.
   * @returns {object} Estudiante generado.
   */
  generar(id) {
    return {
      id,
      codigo: `EST-${String(id).padStart(4, '0')}`,
      nombre: faker.person.firstName(),
      apellido: faker.person.lastName(),
      email: faker.internet.email().toLowerCase(),
      telefono: faker.phone.number(),
      fechaNacimiento: faker.date
        .birthdate({ min: 17, max: 30, mode: 'age' })
        .toISOString()
        .slice(0, 10),
      promedio: Math.round(faker.number.float({ min: 2, max: 5 }) * 10) / 10,
    };
  }

  /** @returns {object[]} Todos los estudiantes. */
  obtenerTodos() {
    return [...this.estudiantes];
  }

  /**
   * @param {number} id Identificador a buscar.
   * @returns {object|null} El estudiante o null si no existe.
   */
  obtenerPorId(id) {
    return this.estudiantes.find((e) => e.id === id) || null;
  }
}

module.exports = { EstudianteService, estudianteService: new EstudianteService() };