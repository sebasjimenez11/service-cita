import { Router } from "express";
import pagoController from "../controller/pagoController";

const controller = new pagoController();

const router = Router();

router.post('/create', controller.crearPago);
export default router;