/**
 * @openapi
 * components:
 *   schemas:
 *     Subject:
 *       type: object
 *       description: Representa una materia del sistema
 *       required:
 *         - id
 *         - name
 *         - credits
 *         - area
 *         - teacher
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Matemáticas
 *         credits:
 *           type: number
 *           example: 4
 *         area:
 *           type: string
 *           enum:
 *             - Ciencias Naturales
 *             - Ciencias Sociales
 *             - Humanidades
 *             - Idiomas
 *           example: Ciencias Naturales
 *         teacher:
 *           type: string
 *           example: Carlos Ramírez
 */
export {};
