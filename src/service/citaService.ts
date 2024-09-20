import CitaDto from "../Dto/cita/citaDto";
import CitaUpdateDto from "../Dto/cita/citaUpdateDto";
import DocumentDto from "../Dto/documento/documentosDto";
import creationEmail from "../helpers/creationEmail";
import azuereShippingEmail from "../helpers/shippingEmail";
import CitasRepository from "../repository/citasRepository";

export default class CitaService {
    private repository = new CitasRepository();

    async crearCita(cita: CitaDto){
        const repository = await this.repository.crearCita(cita);
        if (repository.create) {
            // azuereShippingEmail(creationEmail('confirmation', repository.email));
            return repository;
        }
        return repository
    }

    async getHora(fechaCita : string, IdMedico : string){
        return await this.repository.getHoras(fechaCita, IdMedico);
    }

    async getCitas (IdUser: string, userRol: string, IdPatient ?: string){
        return await this.repository.getCita(IdUser, userRol, IdPatient);
    }

    async getByCodigoCita (codigoCita:string){
        return await this.repository.getByCodigoCita(codigoCita);
    }

    async RescheduleAppointment (cita : CitaUpdateDto){
        try {
            const reschedule = await this.repository.RescheduleAppointment(cita);
            if (reschedule.Reschedule) {
                azuereShippingEmail(creationEmail('reappointment',reschedule.email));
                return reschedule
            } return reschedule
        } catch (error) {
            console.error('Error al reagendar la cita:', error.message);
            throw new Error('Error al reagendar la cita'); 
        }
    }

    async updateStatus(cita:CitaUpdateDto){
        try {
            const updateStatus = await this.repository.updateStatus(cita);
            if (updateStatus.update) {
                azuereShippingEmail(creationEmail('cancellation',updateStatus.email));
                return updateStatus
            } return updateStatus;
            }catch (error) {
                console.error('Error al actualizar el estado:', error.message);
                throw new Error('Error al actualizar el estado'); 
            }
    }

    async crearDocumentos(documentDtos: DocumentDto[]) {
        try {
            return await this.repository.crearDocumentos(documentDtos);
        } catch (error) {
            console.error('Error al crear los documentos:', error.message);
            throw new Error('Error al crear los documentos');
        }
    }
    
}