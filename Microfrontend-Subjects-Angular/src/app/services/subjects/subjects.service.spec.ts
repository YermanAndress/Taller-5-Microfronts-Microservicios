import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Subject } from '../../interfaces/subjects.interface';
import { SUBJECTS_MOCK } from '../../mocks/subjects.mocks';
import { SubjectsService } from './subjects.service';

describe('SubjectsService', () => {
  let service: SubjectsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(SubjectsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no queden peticiones HTTP pendientes
    httpMock.verify();
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

  });

  describe('getAllSubjects', () => {
  
    it('debería realizar una petición GET y retornar una lista de materias', () => {
      const countSubjects = 5;
      const mockSubjects: Subject[] = SUBJECTS_MOCK;

      service.getAllSubjects(countSubjects).subscribe((materias) => {
        expect(materias).toEqual(mockSubjects);
        expect(materias.length).toBe(mockSubjects.length);
      });

      const req = httpMock.expectOne(`http://localhost:3004/api/subjects/${countSubjects}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockSubjects);
    });

    it('debería propagar un error si la petición HTTP falla', () => {
      const countSubjects = 3;

      service.getAllSubjects(countSubjects).subscribe({
        next: () => {
          fail('No debería emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`http://localhost:3004/api/subjects/${countSubjects}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });
  
  });

});
