import { Router } from "express";
import { GradesController } from "./grades.controller";

export class GradesRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new GradesController();

    /**
     * @openapi
     * /api/grades/{countGrades}:
     *   get:
     *     summary: Obtener listado de grados
     *     description: Retorna una lista de grados generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Grades
     *     parameters:
     *       - in: path
     *         name: countGrades
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de grados a generar
     *     responses:
     *       200:
     *         description: Lista de grados generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Grade'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countGrades", controller.getAllGrades);

    return router;
  }
}
