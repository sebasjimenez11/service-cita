import { Router } from "express";
import controllerCita from "../controller/citasController";
import validateToken from "../middleware/verifyToken";
import { isAdminOrPatient, isAdminOrPatientOrDoctor } from "../middleware/hasRole";
import fileUploadMiddleware from "../middleware/fileMiddleware";
import { validateRequest } from "../middleware/validateRequest";
import {
    crearCitaValidators, 
    createDocumentValidators,
    rescheduleAppointmentValidators, 
    updateMotivoValidators, 
    updateStatusValidators, 
    getHoraValidators
} from "../middleware/validatorCita";
import { validationResult } from "express-validator";

const router = Router();
const controller = new controllerCita()

router.post('/create',
     validateToken, 
     isAdminOrPatient, 
     crearCitaValidators,
     controller.crearCitaController
    );
router.get('/hour', 
    getHoraValidators, 
    validateRequest, 
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
router.post('/documentos',
    validateToken,
    isAdminOrPatient,
    fileUploadMiddleware(createDocumentValidators),
    controller.createDocumentController
);
router.put('/motivo', 
    validateToken, 
    isAdminOrPatient, 
    updateMotivoValidators, 
    validationResult,
    controller.UpdateMotivoController
);
router.get('/getCita',
    validateToken, 
    isAdminOrPatientOrDoctor,
    controller.getByIdCita
);
export default router;