import { Router } from "express";
import controllerCita from "../controller/citasController";
import validateToken from "../middleware/verifyToken";
import { isAdminOrPatient } from "../middleware/hasRole";

const router = Router();
const controller = new controllerCita()

router.post('/create', validateToken, isAdminOrPatient, controller.crearCitaController);
router.get('/hour', controller.getHoraController);
router.delete('/delete', controller.deleteCita);
router.get('/all');
router.post('/update-appointment');
router.put('');

export default router