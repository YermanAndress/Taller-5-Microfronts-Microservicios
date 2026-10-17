const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

module.exports = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Estudiantes',
      version: '1.0.0',
      description: 'Microservicio de estudiantes con datos simulados (Faker.js)',
    },
    servers: [{ url: 'http://localhost:3003' }],
  },
  apis: [path.join(__dirname, '../routes/*.js')],
});