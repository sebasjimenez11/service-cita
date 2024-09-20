import { Router } from "express";
import controllerCita from "../controller/citasController";
import validateToken from "../middleware/verifyToken";
import { isAdminOrPatient, isAdminOrPatientOrDoctor, isDoctor } from "../middleware/hasRole";
import fileUploadMiddleware from "../middleware/fileMiddleware";
import { validateRequest } from "../middleware/validateRequest";
import {
    crearCitaValidators, 
    rescheduleAppointmentValidators,
    updateStatusValidators, 
    getHoraValidators
} from "../middleware/validatorCita";
import { validationResult } from "express-validator";

const router = Router();
const controller = new controllerCita()

router.post('/create',
     validateToken, 
     isAdminOrPatient, 
     crearCitaValidators(),
     validateRequest,
     controller.crearCitaController
    );
router.get('/hour',
    controller.getHoraController
);

router.get('/get',
    validateToken, 
    isAdminOrPatientOrDoctor,
    controller.getAllCitasController
);
router.put('/updateStatus',
    validateToken,   
    isAdminOrPatient, 
    updateStatusValidators, 
    validateRequest, 
    controller.updateStatusController
);

router.get('/getCita',
    validateToken, 
    isAdminOrPatientOrDoctor,
    controller.getByIdCita
);

router.get('/getByDocument',
    validateToken, 
    isDoctor, 
    controller.getCitaByDocumentPatient
)

export default router;