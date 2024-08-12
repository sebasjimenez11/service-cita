import { Response, Request } from "express"
import CitaService from "../service/citasService";

const service = new CitaService();
const crearCitaController = async (req: Request, res: Response) =>{

}

export const getHoraController = async (req:Request, res:Response)=>{
    try {
        const {Fecha_Cita} = req.body;
        const getHora = service.getHora(Fecha_Cita);
        res.status(200).json({horas: [getHora]})
    } catch (error) {
        res.status(500).json({message:"error interno del servidor"})
    }
}