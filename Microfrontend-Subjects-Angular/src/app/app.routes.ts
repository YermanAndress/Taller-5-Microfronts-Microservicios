import { Routes } from '@angular/router';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link SubjectsPage}
 */
export const routes: Routes = [
  /**
   * Ruta de materias.
   *
   * @remarks
   * Renderiza el componente `SubjectsPage`, encargado
   * de mostrar y gestionar el listado de materias.
   */
  { path: '', loadComponent: () => import('./pages/subjects/subjects.page').then((m) => m.SubjectsPage)},
];
