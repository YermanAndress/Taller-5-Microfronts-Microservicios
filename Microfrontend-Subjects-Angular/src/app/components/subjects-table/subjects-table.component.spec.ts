import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SUBJECTS_MOCK } from '../../mocks/subjects.mocks';
import { SubjectsTableComponent } from './subjects-table.component';

describe('SubjectsTableComponent', () => {
  let component: SubjectsTableComponent;
  let fixture: ComponentFixture<SubjectsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectsTableComponent);
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

  it('debería renderizar una fila por cada materia', () => {
    component.subjects = SUBJECTS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.subjects.length);
  });

  it('debería mostrar los datos de la materia en cada columna', () => {
    component.subjects = SUBJECTS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const subject = component.subjects[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(subject.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(subject.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(subject.teacher);
      expect(columns[3].nativeElement.textContent.trim()).toBe(String(subject.credits));
      expect(columns[4].nativeElement.textContent.trim()).toBe(subject.area);
    });
  });

  it('debería mapear cada área a su BadgeType correcto', () => {
    expect(component.areaMap['Ciencias Naturales']).toBe('success');
    expect(component.areaMap['Ciencias Sociales']).toBe('warning');
    expect(component.areaMap['Humanidades']).toBe('primary');
    expect(component.areaMap['Idiomas']).toBe('danger');
  });
});
