const express = require('express')
const router = express.Router()
const projectController = require('../controllers/projectController')
const taskController = require('../controllers/taskController')

router.get('/api/projects', projectController.index)
router.post('/api/projects', projectController.create)
router.get('/api/projects/:projectId', projectController.show)
router.patch('/api/projects/:projectId', projectController.update)
router.delete('/api/projects/:projectId', projectController.delete)


router.get('/api/projects/:projectId/tasks', taskController.index)
router.get('/api/tasks/:taskId', taskController.show)
router.delete('/api/tasks/:taskId', taskController.delete)
router.patch('/api/tasks/:taskId', taskController.update)
// router.get('/api/tasks/:taskId/subtasks', taskController.createSubtask)
router.get('/api/tasks/:taskId/subtasks', taskController.showSubtasks)
router.patch('/api/subtasks/:subtaskId', taskController.updateSubtask)
router.post('/api/projects/:projectId/tasks', taskController.create)

module.exports = router