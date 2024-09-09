import PagoDto from "../Dto/pago/pagoDto";
import PagoService from "../service/pagoService";
import { Response, Request } from "express";

export default class PagoController {
    private service = new PagoService();
    private pagoDto = new PagoDto();

    crearPago = async (req: Request, res: Response) => {
        try {
            this.pagoDto.tipoPago = req.body.tipoPago || 'epayco'; // Diferenciar entre 'epayco' o 'efectivo'

            if (this.pagoDto.tipoPago === 'epayco') {
                // Mapeo de los campos enviados por ePayco
                this.pagoDto.codigoPago = req.body.x_ref_payco;
                this.pagoDto.estado = req.body.x_response;
                this.pagoDto.descripcion = req.body.x_description;
                this.pagoDto.fechaHora = new Date(req.body.x_transaction_date);
                this.pagoDto.valor = req.body.x_amount;
                this.pagoDto.fKCodigoCita = req.body.x_extra1;
                this.pagoDto.metodoPago = req.body.x_payment_method;
                this.pagoDto.transaccionId = req.body.x_transaction_id;
                this.pagoDto.referenciaPago = req.body.x_extra1;
                this.pagoDto.medioPago = req.body.x_franchise;
                this.pagoDto.estadoTransaccion = req.body.x_response_reason_text;
                this.pagoDto.detalleRespuesta = req.body.x_approval_code;
            } else if (this.pagoDto.tipoPago === 'efectivo') {
                // Manejar los pagos en efectivo con campos personalizados
                this.pagoDto.estado = 'pendiente'; // Estado del pago en efectivo
                this.pagoDto.descripcion = req.body.descripcion;
                this.pagoDto.fechaHora = new Date();
                this.pagoDto.valor = req.body.valor;
                this.pagoDto.fKCodigoCita = req.body.fKCodigoCita;
                this.pagoDto.metodoPago = 'efectivo';
                this.pagoDto.transaccionId = 'N/A';
                this.pagoDto.referenciaPago = req.body.referenciaPago || 'N/A';
                this.pagoDto.medioPago = 'efectivo';
                this.pagoDto.estadoTransaccion = 'Aprobado en efectivo';
                this.pagoDto.detalleRespuesta = 'N/A';
            }

            const crearPago = await this.service.crearPago(this.pagoDto);
            if (crearPago.create) {
                res.status(200).json(crearPago);
            } else {
                res.status(400).json({ message: "No se pudo crear el pago." });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
