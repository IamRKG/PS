import { Router } from "express";

import { getPS, createPS, getAllPS } from "./handler/ps";

const router = Router();

router.get('/ps', getAllPS);

router.get('/ps/:id', getPS);

router.post('/psCreate', createPS)

export default router;