const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');//importar controlador de tarefas


//Rotas e metodos correspondentes no controladr

router.get('/', taskController.getAllTasks);
router.post('/', taskController.createTask);
router.get('/:id', taskController.getTaskById);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;