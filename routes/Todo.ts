import { Router } from "express";

import { addTodo, deleteTodo, completedTodo } from "../controllers/admin.js";

const router = Router();

router.post("/todo", addTodo);

router.get("/delete-todo/:id", deleteTodo);
router.get("/completed-todo/:id", completedTodo);

export default router;
