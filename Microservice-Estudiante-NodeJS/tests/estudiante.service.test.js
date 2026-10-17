const { EstudianteService } = require('../src/services/estudiante.service');

describe('EstudianteService', () => {
  it('genera 20 estudiantes por defecto', () => {
    expect(new EstudianteService().obtenerTodos()).toHaveLength(20);
  });

  it('respeta la cantidad indicada', () => {
    expect(new EstudianteService(5).obtenerTodos()).toHaveLength(5);
  });

  it('genera estudiantes con la estructura esperada', () => {
    const [e] = new EstudianteService(1).obtenerTodos();
    expect(e).toEqual({
      id: 1,
      codigo: 'EST-0001',
      nombre: expect.any(String),
      apellido: expect.any(String),
      email: expect.stringContaining('@'),
      telefono: expect.any(String),
      fechaNacimiento: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
      promedio: expect.any(Number),
    });
    expect(e.promedio).toBeGreaterThanOrEqual(2);
    expect(e.promedio).toBeLessThanOrEqual(5);
  });

  it('es reproducible gracias a la semilla', () => {
    expect(new EstudianteService(3).obtenerTodos()).toEqual(new EstudianteService(3).obtenerTodos());
  });

  it('busca por id existente', () => {
    expect(new EstudianteService(3).obtenerPorId(2).id).toBe(2);
  });

  it('devuelve null si el id no existe', () => {
    expect(new EstudianteService(3).obtenerPorId(99)).toBeNull();
  });

  it('obtenerTodos devuelve una copia', () => {
    const s = new EstudianteService(3);
    s.obtenerTodos().pop();
    expect(s.obtenerTodos()).toHaveLength(3);
  });
});