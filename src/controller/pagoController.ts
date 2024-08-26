import PagoService from "../service/pagoService";
import { Response, Request } from "express";

export default class pagoController{
    private service = new PagoService();

    crearPago = async (req:Request, res: Response) => {
        const pago = await this.service.crearPago();
    }    
}