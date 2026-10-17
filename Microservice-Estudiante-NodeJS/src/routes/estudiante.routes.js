const { Router } = require('express');
const controller = require('../controllers/estudiante.controller');

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Estudiante:
 *       type: object
 *       properties:
 *         id: { type: integer, example: 1 }
 *         codigo: { type: string, example: EST-0001 }
 *         nombre: { type: string, example: Camila }
 *         apellido: { type: string, example: Ramírez }
 *         email: { type: string, example: camila.ramirez@example.com }
 *         telefono: { type: string, example: 315 123 4567 }
 *         fechaNacimiento: { type: string, format: date, example: 2003-05-14 }
 *         promedio: { type: number, example: 4.2 }
 *     Error:
 *       type: object
 *       properties:
 *         mensaje: { type: string }
 */

/**
 * @swagger
 * /api/estudiantes:
 *   get:
 *     summary: Lista todos los estudiantes
 *     tags: [Estudiantes]
 *     responses:
 *       200:
 *         description: Lista de estudiantes generada con Faker.js
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Estudiante'
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /api/estudiantes/{id}:
 *   get:
 *     summary: Obtiene un estudiante por su id
 *     tags: [Estudiantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer, minimum: 1 }
 *     responses:
 *       200:
 *         description: Estudiante encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Estudiante'
 *       400:
 *         description: Id inválido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Estudiante no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/:id', controller.obtenerPorId);

module.exports = router;