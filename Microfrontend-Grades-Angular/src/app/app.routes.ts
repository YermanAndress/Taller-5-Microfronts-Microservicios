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
 * @see {@link GradesPage}
 */
export const routes: Routes = [
  /**
   * Ruta de grados.
   *
   * @remarks
   * Renderiza el componente `GradesPage`, encargado
   * de mostrar y gestionar el listado de grados.
   */
  { path: '', loadComponent: () => import('./pages/grades/grades.page').then((m) => m.GradesPage)},
];
