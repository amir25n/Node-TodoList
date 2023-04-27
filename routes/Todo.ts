import { Router } from "express";

import { addTodo } from "../controllers/get-todo.js";

const router = Router();

router.post("/todo", addTodo);

export default router;
