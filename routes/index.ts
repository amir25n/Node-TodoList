import { Router } from "express";

import { indexRoutes } from "../controllers/fetchAll.js";

const router = Router();

router.get("/", indexRoutes);

export default router;
