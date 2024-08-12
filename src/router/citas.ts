import { Router } from "express";
import { getHoraController } from "../controller/citasController";

const router = Router();

router.post('/create');
router.get('/hour', getHoraController);
router.get('/all');




export default router