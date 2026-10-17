/**
 * @openapi
 * components:
 *   schemas:
 *     Grade:
 *       type: object
 *       description: Representa un grado escolar del sistema
 *       required:
 *         - id
 *         - name
 *         - director
 *         - studentsCount
 *         - jornada
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           enum:
 *             - Primero
 *             - Segundo
 *             - Tercero
 *             - Cuarto
 *             - Quinto
 *             - Sexto
 *             - Séptimo
 *             - Octavo
 *             - Noveno
 *             - Décimo
 *             - Once
 *           example: Sexto
 *         director:
 *           type: string
 *           example: Carlos Ramírez
 *         studentsCount:
 *           type: number
 *           example: 32
 *         jornada:
 *           type: string
 *           enum:
 *             - Mañana
 *             - Tarde
 *             - Única
 *           example: Mañana
 */
export {};
