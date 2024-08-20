import { Response, Request } from "express"
import CitaService from "../service/citasService";

const service = new CitaService();
const crearCitaController = async (req: Request, res: Response) =>{

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