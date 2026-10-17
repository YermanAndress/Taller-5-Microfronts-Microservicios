import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';
import { Estudiante } from '../models/estudiante.interface';
import { EstudianteService } from './estudiante.service';

const MOCK: Estudiante = {
  id: 1,
  codigo: 'EST-0001',
  nombre: 'Camila',
  apellido: 'Ramírez',
  email: 'camila@example.com',
  telefono: '315 123 4567',
  fechaNacimiento: '2003-05-14',
  promedio: 4.2,
};

describe('EstudianteService', () => {
  let service: EstudianteService;
  let httpMock: HttpTestingController;
  const url = `${environment.apiUrl}/estudiantes`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(EstudianteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('obtenerTodos hace GET a /estudiantes', () => {
    service.obtenerTodos().subscribe((r) => expect(r).toEqual([MOCK]));
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush([MOCK]);
  });

  it('obtenerPorId hace GET a /estudiantes/:id', () => {
    service.obtenerPorId(1).subscribe((r) => expect(r).toEqual(MOCK));
    const req = httpMock.expectOne(`${url}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(MOCK);
  });
});