import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GRADES_MOCK } from '../../mocks/grades.mocks';
import { GradesTableComponent } from './grades-table.component';

describe('GradesTableComponent', () => {
  let component: GradesTableComponent;
  let fixture: ComponentFixture<GradesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada grado', () => {
    component.grades = GRADES_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.grades.length);
  });

  it('debería mostrar los datos del grado en cada columna', () => {
    component.grades = GRADES_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const grade = component.grades[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(grade.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(grade.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(grade.director);
      expect(columns[3].nativeElement.textContent.trim()).toBe(String(grade.studentsCount));
      expect(columns[4].nativeElement.textContent.trim()).toBe(grade.jornada);
    });
  });

  it('debería mapear cada jornada a su BadgeType correcto', () => {
    expect(component.jornadaMap['Mañana']).toBe('warning');
    expect(component.jornadaMap['Tarde']).toBe('success');
    expect(component.jornadaMap['Única']).toBe('primary');
  });
});
