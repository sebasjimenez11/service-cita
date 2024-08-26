import PagoDto from "../Dto/pago/pagoDto";
import PagoService from "../service/pagoService";
import { Response, Request } from "express";

export default class pagoController{
    private service = new PagoService();
    private pagoDto = new PagoDto();

    crearPago = async (req:Request, res: Response) => {
        try {
            this.pagoDto.codigoPago = req.body.codigoPago;
            this.pagoDto.estado = req.body.estado; 
            this.pagoDto.descripcion = req.body.descripcion; 
            this.pagoDto.fechaHora = new Date(req.body.fechaHora); 
            this.pagoDto.valor = req.body.valor; 
            this.pagoDto.fKCodigoCita = req.body.fKCodigoCita; 
            this.pagoDto.metodoPago = req.body.metodoPago;
            this.pagoDto.transaccionId = req.body.transaccionId;
            this.pagoDto.referenciaPago = req.body.referenciaPago;
            this.pagoDto.medioPago = req.body.medioPago; 
            this.pagoDto.estadoTransaccion = req.body.estadoTransaccion; 
            this.pagoDto.detalleRespuesta = req.body.detalleRespuesta;
            
            const crearPago = await this.service.crearPago(this.pagoDto)
            if (crearPago.create) {
                res.status(200).json(crearPago);
            }else{
                res.status(200).json(crearPago);
            }
            res.status(202).json(crearPago);
        } catch (error) {
            res.status(505).json({error : error.message});
        }
        
    }    
}