import { Response, Request } from "express"
import CitaService from "../service/citasService";
import CitaDto from "../Dto/citaDto";

const service = new CitaService();
export const crearCitaController = async (req: Request, res: Response) =>{
    try {
        const {
            horaCita, 
            fechaCita, 
            fKIdDoct, 
            fKIdPac
        } = req.body;
        const crearCita = await service.crearCita(new CitaDto(horaCita, fechaCita, fKIdDoct, fKIdPac));
        if (crearCita.create) {
            res.status(200).json({message : crearCita.message});
        } else {
            res.status(403).json({message: 'error al crear la cita'});
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error al crear la cita' });
    }
    
}

export const getHoraController = async (req:Request, res:Response)=>{
    try {
        const fechaCita = req.query.fechaCita as string;
        const getHora = await service.getHora(fechaCita);
        res.status(200).json(getHora); // Devuelve el objeto { horas: [...] }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error al obtener las horas' });
    }

}

export const deleteCita = async (req: Request, res: Response)=>{
    try {
        const IdPatient = req.body.ID;
        const deleteCita = await service.deleteCita(IdPatient)
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