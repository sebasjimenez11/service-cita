import { Router } from "express";
import { getHoraController, crearCitaController, deleteCita } from "../controller/citasController";
import validateToken from "../middleware/verifyToken";
import { isAdminOrPatient } from "../middleware/hasRole";

const router = Router();

router.post('/create', validateToken, isAdminOrPatient, crearCitaController);
router.get('/hour', getHoraController);
router.delete('/delete', deleteCita);
router.get('/all');
router.post('/update-appointment');
router.put('');

export default router