import pagoRepository from './../repository/pagoRepository';

export default class PagoService {
  private repository = new pagoRepository();

  async crearPago() {
    try {
      const result = await this.repository.crearPago();
      return result;
    } catch (error) {
      console.error('Error creating payment:', error);
      throw error; 
    }
  }
}
