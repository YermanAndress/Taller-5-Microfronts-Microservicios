const swaggerSpec = require('../src/docs/swagger');

describe('Especificación OpenAPI', () => {
  it('documenta los endpoints de estudiantes', () => {
    expect(Object.keys(swaggerSpec.paths)).toEqual(
      expect.arrayContaining(['/api/estudiantes', '/api/estudiantes/{id}']),
    );
  });

  it('define los esquemas Estudiante y Error', () => {
    expect(swaggerSpec.components.schemas).toHaveProperty('Estudiante');
    expect(swaggerSpec.components.schemas).toHaveProperty('Error');
  });
});