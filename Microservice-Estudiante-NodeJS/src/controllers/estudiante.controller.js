const { estudianteService } = require('../services/estudiante.service');

/** GET /api/estudiantes */
const listar = (req, res) => {
  res.status(200).json(estudianteService.obtenerTodos());
};

/** GET /api/estudiantes/:id */
const obtenerPorId = (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ mensaje: 'El id debe ser un entero positivo' });
  }
  const estudiante = estudianteService.obtenerPorId(id);
  if (!estudiante) {
    return res.status(404).json({ mensaje: `Estudiante con id ${id} no encontrado` });
  }
  return res.status(200).json(estudiante);
};

module.exports = { listar, obtenerPorId };