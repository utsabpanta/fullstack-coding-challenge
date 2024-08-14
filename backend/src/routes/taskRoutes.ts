import { Router } from 'express';
import {
  createTask,
  deleteTask,
  getTasksByUser,
} from '../controllers/taskController';

const router = Router();

router.post('/users/:userId/tasks', createTask);
router.delete('/users/:userId/tasks/:taskId', deleteTask);
router.get('/users/:userId/tasks', getTasksByUser);

export default router;
