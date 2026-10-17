import { Routes } from '@angular/router';
import { EstudianteListComponent } from './components/estudiante-list/estudiante-list.component';

/** Rutas del microfront de estudiantes (las que el Host carga por Module Federation). */
export const ESTUDIANTE_ROUTES: Routes = [{ path: '', component: EstudianteListComponent }];