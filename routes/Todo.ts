import { Router } from "express";

import { addTodo, deleteTodo, completeTodo, deleteTabel } from "../controllers/admin.js";

const router = Router();

router.post("/todo", addTodo);

router.get("/delete-todo/:id", deleteTodo);

router.get("/completed-todo/:id", completeTodo);

router.get("/delete-tabel", deleteTabel);

export default router;
