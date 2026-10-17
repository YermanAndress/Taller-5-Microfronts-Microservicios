const request = require('supertest');
const app = require('../src/app');
const { estudianteService } = require('../src/services/estudiante.service');

describe('API /api/estudiantes', () => {
  afterEach(() => jest.restoreAllMocks());

  it('GET / lista los estudiantes', async () => {
    const res = await request(app).get('/api/estudiantes');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(20);
    expect(res.body[0]).toHaveProperty('codigo', 'EST-0001');
  });

  it('GET /:id devuelve un estudiante', async () => {
    const res = await request(app).get('/api/estudiantes/1');
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(1);
  });

  it('GET /:id responde 404 si no existe', async () => {
    const res = await request(app).get('/api/estudiantes/999');
    expect(res.status).toBe(404);
    expect(res.body.mensaje).toMatch(/no encontrado/);
  });

  it.each(['abc', '0', '-3', '1.5'])('GET /%s responde 400', async (id) => {
    const res = await request(app).get(`/api/estudiantes/${id}`);
    expect(res.status).toBe(400);
  });

  it('responde 500 ante un error inesperado', async () => {
    jest.spyOn(estudianteService, 'obtenerTodos').mockImplementation(() => {
      throw new Error('fallo');
    });
    const res = await request(app).get('/api/estudiantes');
    expect(res.status).toBe(500);
    expect(res.body.mensaje).toBe('Error interno del servidor');
  });

  it('respeta el status de errores controlados', async () => {
    jest.spyOn(estudianteService, 'obtenerTodos').mockImplementation(() => {
      throw Object.assign(new Error('solicitud inválida'), { status: 400 });
    });
    const res = await request(app).get('/api/estudiantes');
    expect(res.status).toBe(400);
    expect(res.body.mensaje).toBe('solicitud inválida');
  });

  it('responde 404 en rutas desconocidas', async () => {
    const res = await request(app).get('/api/otra');
    expect(res.status).toBe(404);
  });

  it('sirve Swagger UI en /api/docs', async () => {
    const res = await request(app).get('/api/docs/');
    expect(res.status).toBe(200);
    expect(res.text).toContain('swagger');
  });
});