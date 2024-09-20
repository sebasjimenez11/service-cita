import medicamentosRepository from "../repository/medicamentosRepository";
import RecetaDto from "../Dto/medicamentos/medicamentosDto";
import azuereShippingEmail from "../helpers/shippingEmail";
import creationEmail from "../helpers/creationEmail";

export default class medicamentosService {
    private repository: medicamentosRepository = new medicamentosRepository();

    async createMedicamento (receta: RecetaDto){
        return await this.repository.createMedicamento(receta);
    }

    async getAlarmas() {
        try {
            const medicamentosActivos = await this.repository.getActiveMedicamentos();

          
            if (medicamentosActivos.length === 0) {
                console.log("No hay recordatorios pendientes.");
                return; 
            }

            const currentDateTime = new Date();

            for (const medicamento of medicamentosActivos) {
                const horaInicio = new Date(`${medicamento.Receta_Fecha_Inicio}T${medicamento.Receta_Hora_Inicio}`);
                const intervaloMs = medicamento.Receta_Intervalo * 60 * 1000; 
                const timePassedMs = currentDateTime.getTime() - horaInicio.getTime();

                const tomas = Math.floor(timePassedMs / intervaloMs);
                const proximaToma = new Date(horaInicio.getTime() + (tomas + 1) * intervaloMs);

                const diferenciaMs = proximaToma.getTime() - currentDateTime.getTime();
                if (diferenciaMs > 0 && diferenciaMs <= 5 * 60 * 1000) {
                    const horaRecordatorio = proximaToma.toLocaleTimeString();
                    const nombrePaciente = `${medicamento.Paciente_Nombre} ${medicamento.Paciente_Apellido}`;

                    
                    azuereShippingEmail(creationEmail("medicationReminder", medicamento.Paciente_Email, nombrePaciente, horaRecordatorio))
                    console.log(`Alarma enviada a: ${medicamento.Paciente_Email} para la hora: ${horaRecordatorio}`);

                    const finReceta = new Date(medicamento.Receta_Fecha_Fin);
                    if (currentDateTime >= finReceta) {
                        await this.repository.updateStatus('inactivo', medicamento.Receta_Codigo);
                    }
                }
            }
        } catch (error) {
            console.error("Error al procesar las alarmas: ", error.message);
        }
    }

    async getMedicamentos(codigoCita: string, IdPaciente: string, IdDoctor:string){
        return await this.repository.getMedicamentosByIdMedico(codigoCita, IdPaciente, IdDoctor);
    }

    async updateStauts(estado: string, codigoReceta: string){
        return await this.repository.updateStatus(estado, codigoReceta);
    }

    async getMedicamentosPaciente(IdPaciente: string){
        return await this.repository.getMedicamentosByIdPaciente(IdPaciente);
    }
}