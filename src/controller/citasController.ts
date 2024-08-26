import { Response, Request } from "express"
import CitaService from "../service/citaService";
import CitaDto from "../Dto/cita/citaDto";


export default class citaController {
    private service = new CitaService();
    private citaDto = new CitaDto();
    
    crearCitaController = async (req: Request, res: Response) =>{
        try {
            this.citaDto.horaCita = req.body.horaCita;
            this.citaDto.fechaCita = req.body.fechaCita;
            this.citaDto.fKIdDoct = req.body.fKIdDoct;
            this.citaDto.fKIdPac = req.body.fKIdPac;
            const crearCita = await this.service.crearCita(this.citaDto);
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

    getHoraController = async (req:Request, res:Response)=>{
        try {
            const fechaCita = req.query.fechaCita as string;
            const getHora = await this.service.getHora(fechaCita);
            res.status(200).json(getHora); // Devuelve el objeto { horas: [...] }
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ message: 'Error al obtener las horas' });
        }
    
    }

    deleteCita = async (req: Request, res: Response)=>{
        try {
            const IdPatient = req.body.ID;
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
}