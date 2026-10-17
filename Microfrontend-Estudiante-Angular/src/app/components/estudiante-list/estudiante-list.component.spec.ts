import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { Estudiante } from '../../models/estudiante.interface';
import { EstudianteListComponent } from './estudiante-list.component';

const MOCKS: Estudiante[] = [
  {
    id: 1,
    codigo: 'EST-0001',
    nombre: 'Camila',
    apellido: 'Ramírez',
    email: 'camila@example.com',
    telefono: '315 123 4567',
    fechaNacimiento: '2003-05-14',
    promedio: 4.2,
  },
  {
    id: 2,
    codigo: 'EST-0002',
    nombre: 'Andrés',
    apellido: 'Gómez',
    email: 'andres@example.com',
    telefono: '300 987 6543',
    fechaNacimiento: '2001-11-02',
    promedio: 3.8,
  },
];

describe('EstudianteListComponent', () => {
  let fixture: ComponentFixture<EstudianteListComponent>;
  let component: EstudianteListComponent;
  let httpMock: HttpTestingController;
  const url = `${environment.apiUrl}/estudiantes`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EstudianteListComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    fixture = TestBed.createComponent(EstudianteListComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges(); // dispara ngOnInit
  });

  afterEach(() => httpMock.verify());

  const el = () => fixture.nativeElement as HTMLElement;

  it('muestra el estado de carga inicial', () => {
    httpMock.expectOne(url);
    expect(el().textContent).toContain('Cargando estudiantes');
  });

  it('renderiza los estudiantes recibidos de la API', () => {
    httpMock.expectOne(url).flush(MOCKS);
    fixture.detectChanges();
    expect(el().querySelectorAll('tbody tr').length).toBe(2);
    expect(el().textContent).toContain('Camila Ramírez');
    expect(component.cargando()).toBe(false);
  });

  it('muestra un mensaje de error si la petición falla', () => {
    httpMock.expectOne(url).flush('error', { status: 500, statusText: 'Server Error' });
    fixture.detectChanges();
    expect(component.error()).toBeTruthy();
    expect(el().querySelector('.error')?.textContent).toContain('No se pudo cargar');
  });

  it('reintenta la carga al pulsar el botón', () => {
    httpMock.expectOne(url).flush('error', { status: 500, statusText: 'Server Error' });
    fixture.detectChanges();
    (el().querySelector('.reintentar') as HTMLButtonElement).click();
    httpMock.expectOne(url).flush(MOCKS);
    fixture.detectChanges();
    expect(component.error()).toBeNull();
    expect(el().querySelectorAll('tbody tr').length).toBe(2);
  });

  it('filtra por nombre, apellido o código', () => {
    httpMock.expectOne(url).flush(MOCKS);
    fixture.detectChanges();
    const input = el().querySelector('input') as HTMLInputElement;
    input.value = 'gómez';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.estudiantesFiltrados().length).toBe(1);
    expect(el().querySelectorAll('tbody tr').length).toBe(1);
  });

  it('muestra mensaje cuando no hay coincidencias', () => {
    httpMock.expectOne(url).flush(MOCKS);
    component.termino.set('zzz');
    fixture.detectChanges();
    expect(el().querySelector('.vacio')?.textContent).toContain('No se encontraron');
  });
});