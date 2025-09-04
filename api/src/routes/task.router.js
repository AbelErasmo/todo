import express from "express";
const router = express.Router();
import { body } from "express-validator";
import { createTask } from "../controllers/task.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js"

router.use(requireAuth);

router.route('/task')
    .post([body('title').notEmpty().withMessage('Titulo e obrigatorio'),
        body('description').notEmpty().withMessage('A descricao da tarefa e obrigatoria')
    ], createTask);

export default router;