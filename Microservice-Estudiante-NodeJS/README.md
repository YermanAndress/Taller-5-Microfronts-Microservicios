# Microservice-Estudiante-NodeJS

Microservicio de **estudiantes** (Node.js + Express). Los datos se generan con Faker.js y la API está documentada con Swagger/OpenAPI.

## Requisitos

- Node.js
- npm

## Ejecución

    npm install
    npm start
    npm test

- `npm start` levanta el servidor en http://localhost:3003
- `npm test` ejecuta las pruebas unitarias con cobertura (mínimo 90%)

## Endpoints

| Método | Ruta                 | Descripción          |
|--------|----------------------|----------------------|
| GET    | /api/estudiantes     | Lista de estudiantes |
| GET    | /api/estudiantes/:id | Estudiante por id    |
| GET    | /api/docs            | Swagger UI (OpenAPI) |

## Modelo de datos

    {
      "id": 1,
      "codigo": "EST-0001",
      "nombre": "Camila",
      "apellido": "Ramírez",
      "email": "camila.ramirez@example.com",
      "telefono": "315 123 4567",
      "fechaNacimiento": "2003-05-14",
      "promedio": 4.2
    }

## Estructura

    src/
      app.js          configuración de Express, CORS y Swagger
      server.js       arranque del servidor (puerto 3003)
      routes/         rutas y documentación Swagger
      controllers/    manejo de peticiones y respuestas
      services/       datos simulados con Faker.js
      docs/           configuración de swagger-jsdoc
    tests/            pruebas del servicio y de la API