import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { SubjectsService } from "./subjects.service";

/**
 * Controlador de materias.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con materias,
 * delegando la lógica de negocio al `SubjectsService`.
 */
export class SubjectsController {

  /**
   * Servicio de materias.
   */
  private readonly subjectsService = new SubjectsService();

  /**
   * Maneja la petición HTTP para obtener un listado de materias.
   *
   * @remarks
   * El número de materias a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /subjects/10
   * ```
   */
  getAllSubjects = (req: Request, res: Response): void => {
    const { countSubjects } = req.params;

    setTimeout(() => {
      this.subjectsService
      .getAllSubjects(Number(countSubjects))
      .then((subjects) => res.status(201).json(subjects))
      .catch((error) => HandleError.error(error, res));
    }, 1000);
  };
}
