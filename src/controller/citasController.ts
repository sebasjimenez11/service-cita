import { Response, Request } from "express"
import CitaService from "../service/citaService";
import CitaDto from "../Dto/cita/citaDto";
import CitaUpdateDto from "../Dto/cita/citaUpdateDto";
import DocumentDto from "../Dto/documento/documentosDto";


export default class citaController {
    private service = new CitaService();
    private citaDto = new CitaDto();
    private citaUpdateDto = new CitaUpdateDto();
    
    crearCitaController = async (req: Request, res: Response) =>{
        try {
            this.citaDto.horaCita = req.body.horaCita;
            this.citaDto.fechaCita = req.body.fechaCita;
            this.citaDto.fKIdDoct = req.body.fKIdDoct;
            this.citaDto.fKIdPac = req.body.fKIdPac;
            
            const crearCita = await this.service.crearCita(this.citaDto);

            if (crearCita.create) {
                res.status(200).json({message : crearCita.message, codigoCita : crearCita.citaId});
            } else {
                res.status(403).json({message: 'error al crear la cita'});
            }
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ message: 'Error al crear la cita' });
        }
        
    }

    getHoraController = async (req:Request, res:Response)=>{
        try {
            const fechaCita = req.query.fechaCita as string;
            const IdMedico = req.query.IdMedico as string;
            const getHora = await this.service.getHora(fechaCita, IdMedico);
            res.status(200).json(getHora);
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ message: 'Error al obtener las horas' });
        }
    
    }

    deleteCitaController = async (req: Request, res: Response)=>{
        try {
            const IdPatient = req.body.IdPatient;
            const deleteCita = await this.service.deleteCita(IdPatient)
            if (deleteCita.delete) {
                res.status(202).json({message: deleteCita.message});
            } else {
                res.status(403).json({message: 'error al eliminar la cita'});
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'error al eliminar la cita'});
        }
    }

    getAllCitasController = async (req: Request, res: Response)=>{
        try {
            const IdUser = req.body.ID;
            const userRol = req.body.tokenRol;

            const getCita = await this.service.getCitas(IdUser,userRol);

            res.status(202).json({citas: getCita})

        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'error al traer las cita'});
        }
    }

    getByIdCita = async (req: Request, res: Response) => {
        try {
            const codigoCita = req.query.codigoCita as string; // Lee el parámetro de consulta
            const getByCodigo = await this.service.getByCodigoCita(codigoCita);

            res.status(202).json(getByCodigo);
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: 'Error al traer la cita' });
        }
    }

    RescheduleAppointmentController = async (req: Request, res: Response)=>{
        try {
            this.citaUpdateDto.codigoCita = req.body.codigoCita;
            this.citaUpdateDto.estadoCita = req.body.estadoCita;
            this.citaUpdateDto.horaCita = req.body.horaCita;
            this.citaUpdateDto.fechaCita = req.body.fechaCita;

            const rescheduleAppointment  = await this.service.RescheduleAppointment(this.citaUpdateDto);
            if (rescheduleAppointment.Reschedule) {
                res.status(202).json({message: rescheduleAppointment.message});
            } else {
                res.status(403).json({message: 'error al reagendar la cita'});
            }
        } catch (error) {
            res.status(505).json({error : error.message});
        }
    }

    updateStatusController = async(req: Request, res : Response)=>{
        try {
            this.citaUpdateDto.codigoCita = req.body.codigoCita;
            this.citaUpdateDto.estadoCita = req.body.estadoCita;
            this.citaUpdateDto.emailPatient = req.body.emailPatient
            const updateStatus = await this.service.updateStatus(this.citaUpdateDto);
            if (updateStatus) {
                res.status(202).json({message: updateStatus.message});
            }else {
                res.status(403).json({message: 'error al actualizar el estado de la cita'});
            }
        } catch (error) {
            res.status(505).json({error : error.message});
        }
    }

    UpdateMotivoController = async (req: Request, res: Response)=>{
        try {
            this.citaUpdateDto.codigoCita = req.body.codigoCita;
            this.citaUpdateDto.motivoCita = req.body.motivoCita;

            const updateMotivo = await this.service.updateMotivo(this.citaUpdateDto);
            if (updateMotivo) {
                res.status(202).json({message: updateMotivo.message});
            }else {
                res.status(403).json({message: 'error al actualizar el motivo de la cita'});
            }
        } catch (error) {
            res.status(505).json({error : error.message});
        } 
    }

    createDocumentController = async (req: Request, res: Response) => {
        try {
            const { citaId } = req.body;
            const fileUrls = req.body.fileUrls;
    
            if (!citaId || !fileUrls || fileUrls.length === 0) {
                return res.status(400).json({ message: 'Faltan datos necesarios' });
            }
    
            // Lógica para asociar los documentos con la cita
            const documentDtos = fileUrls.map((url: string) => {
                const doc = new DocumentDto();
                doc.citaId = citaId;
                doc.url = url;
                return doc;
            });
    
            // Guardar documentos en la base de datos
            const crearDocumentos = await this.service.crearDocumentos(documentDtos);
    
            if (crearDocumentos.create) {
                res.status(200).json({ message: 'Documentos creados con éxito', documentos: crearDocumentos });
            } else {
                res.status(500).json({ message: 'Error al crear los documentos' });
            }
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ message: 'Error al crear los documentos' });
        }
    }    
}