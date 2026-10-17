import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesPage } from './grades.page';
import { provideHttpClient } from '@angular/common/http';
import { GradesService } from '../../services/grades/grades.service';
import { GradesTableComponent } from '../../components/grades-table/grades-table.component';
import { of, throwError } from 'rxjs';
import { GRADES_MOCK } from '../../mocks/grades.mocks';
import { By } from '@angular/platform-browser';

describe('GradesPage', () => {
  let component: GradesPage;
  let fixture: ComponentFixture<GradesPage>;
  let gradesService: GradesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradesPage, GradesTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradesPage);
    component = fixture.componentInstance;
    gradesService = TestBed.inject(GradesService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllGrades al iniciar', () => {
    const spyGetAllGrades = jest.spyOn(gradesService, 'getAllGrades').mockReturnValue(of(GRADES_MOCK));
    fixture.detectChanges();
    expect(spyGetAllGrades).toHaveBeenCalled();
  });

  it('debería asignar los grados recibidos del servicio', () => {
    jest.spyOn(gradesService, 'getAllGrades').mockReturnValue(of(GRADES_MOCK));
    fixture.detectChanges();
    expect(component.grades).toEqual(GRADES_MOCK);
  });

  it('debería pasar los grados al componente grades-table', () => {
    jest.spyOn(gradesService, 'getAllGrades').mockReturnValue(of(GRADES_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(GradesTableComponent))
      .componentInstance;
    expect(tableComponent.grades).toEqual(GRADES_MOCK);
  });

  it('debería manejar el error cuando falla getAllGrades', () => {
    component.grades = [];
    const errorResponse = new Error('Error al cargar grados');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(gradesService, 'getAllGrades').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(gradesService.getAllGrades).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.grades.length).toBe(0);
  });
});
