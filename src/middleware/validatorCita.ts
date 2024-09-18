import { body } from 'express-validator';
import { query } from 'express-validator';

export const crearCitaValidators = () => { 
    return [
    body('fechaCita')
        .isISO8601()
        .withMessage('La fecha debe tener un formato válido (ISO8601).')
        .notEmpty()
        .withMessage('La fecha de la cita es requerida.'),
    
    body('fKIdDoct')
        .isString()
        .withMessage('El ID del doctor debe ser numérico.')
        .notEmpty()
        .withMessage('El ID del doctor es requerido.'),
    
    body('fKIdPac')
        .isString()
        .withMessage('El ID del paciente debe ser numérico.')
        .notEmpty()
        .withMessage('El ID del paciente es requerido.')
]
}

export const getHoraValidators = () =>{
    return[
    query('fechaCita')
        .isISO8601()
        .withMessage('La fecha debe tener un formato válido (ISO8601).')
        .notEmpty()
        .withMessage('La fecha de la cita es requerida.'),

    query('IdMedico')
        .isString()
        .withMessage('El ID del médico debe ser string.')
        .notEmpty()
        .withMessage('El ID del médico es requerido.')
]}



export const rescheduleAppointmentValidators = () => {[
    body('citaId')
        .isString()
        .withMessage('El ID de la cita debe ser string.')
        .notEmpty()
        .withMessage('El ID de la cita es requerido.'),

    body('estadoCita')
        .isString()
        .withMessage('El estado de la cita debe ser un string.')
        .notEmpty()
        .withMessage('El estado de la cita es requerido.'),

    body('horaCita')
        .isString()
        .withMessage('La hora de la cita debe ser un string.')
        .notEmpty()
        .withMessage('La hora de la cita es requerida.'),

    body('fechaCita')
        .isISO8601()
        .withMessage('La fecha debe tener un formato válido (ISO8601).')
        .notEmpty()
        .withMessage('La fecha de la cita es requerida.'),
]
}
export const updateStatusValidators = [
    body('citaId')
        .isString()
        .withMessage('El ID de la cita debe ser string.')
        .notEmpty()
        .withMessage('El ID de la cita es requerido.'),

    body('estadoCita')
        .isString()
        .withMessage('El estado de la cita debe ser un string.')
        .notEmpty()
        .withMessage('El estado de la cita es requerido.'),

    body('emailPatient')
        .isEmail()
        .withMessage('El correo del paciente debe tener un formato válido.')
        .notEmpty()
        .withMessage('El correo del paciente es requerido.')
];

