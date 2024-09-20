import { Router } from "express";
import controllerMedicamentos from "../controller/medicamentosController";

const router = Router();
const controller = new controllerMedicamentos()

router.post('/createMedicamento', controller.createMedicamento);
router.post('/getMedicamentos', controller.getMedicamentos)
router.put('/activeAlarms', controller.updateStatus);
router.get('/getAlarms', ()=>{ console.log('hola');
});

export default router;