import { routes } from './app.routes';
import { ESTUDIANTE_ROUTES } from './estudiante.routes';
import { EstudianteListComponent } from './components/estudiante-list/estudiante-list.component';

describe('Rutas', () => {
  it('la ruta raíz carga EstudianteListComponent', () => {
    expect(routes).toBe(ESTUDIANTE_ROUTES);
    expect(routes[0].path).toBe('');
    expect(routes[0].component).toBe(EstudianteListComponent);
  });
});