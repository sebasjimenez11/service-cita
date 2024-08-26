import PagoDto from '../Dto/pago/pagoDto';
import pagoRepository from './../repository/pagoRepository';

export default class PagoService {
  private repository = new pagoRepository();

  async crearPago(pago : PagoDto) {
    try {
      const result = await this.repository.crearPago(pago);
      return result;
    } catch (error) {
      console.error('Error creating payment:', error);
      throw error; 
    }
  }
}
