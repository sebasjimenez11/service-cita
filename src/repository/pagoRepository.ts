import PagoDto from "../Dto/pago/pagoDto";
import db from '../config/configBd';

export default class pagoRepository {
    async crearPago(pago : PagoDto){
        try {
            const row = await db.execute("CALL CrearPago(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",[
                pago.estado,              // p_Estado
                pago.descripcion,        // p_Descripcion
                pago.valor,              // p_Valor
                pago.fKCodigoCita,       // p_FKCodigo_Cita
                pago.metodoPago,         // p_Metodo_Pago
                pago.transaccionId,      // p_Transaccion_ID
                pago.referenciaPago,     // p_Referencia_Pago
                pago.medioPago,          // p_Medio_Pago
                pago.estadoTransaccion,  // p_Estado_Transaccion
                pago.detalleRespuesta    // p_Detalle_Respuesta
            ]);

            return {create:true, message: 'El pago fue creada correctamente'}
        } catch (error) {
            throw new Error(error);
        }
       
    }
}