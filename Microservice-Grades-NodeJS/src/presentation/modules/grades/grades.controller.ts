import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { GradesService } from "./grades.service";

/**
 * Controlador de grados.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con grados,
 * delegando la lógica de negocio al `GradesService`.
 */
export class GradesController {

  /**
   * Servicio de grados.
   */
  private readonly gradesService = new GradesService();

  /**
   * Maneja la petición HTTP para obtener un listado de grados.
   *
   * @remarks
   * El número de grados a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /grades/10
   * ```
   */
  getAllGrades = (req: Request, res: Response): void => {
    const { countGrades } = req.params;

    setTimeout(() => {
      this.gradesService
      .getAllGrades(Number(countGrades))
      .then((grades) => res.status(201).json(grades))
      .catch((error) => HandleError.error(error, res));
    }, 1000);
  };
}
