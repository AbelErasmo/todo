import Task from "../models/task.model.js";
import { validationResult } from "express-validator";

export const createTask = async (req, res) => {
    const errs = validationResult(req);

    if(!errs.isEmpty()) {
        return res.status(400).json({ errs: errs.array() });
    }

    const { title, description } = req.body;
    console.time("auth");
    const { userId } = await req.auth();
    console.timeEnd("auth");

    try {
        const existingTask = await Task.findOne({ title });
        if(existingTask) {
            return res.status(409).json({ message: "A tarefa ja existe!" })
        }
        const newTask = new Task({ title, description, userId});
        await newTask.save();
        return res.status(201).json(newTask);
    } catch (error) {
        return res.status(500).json({ message: "Erro interno do servidor" });
    }
}

// export default taskController;