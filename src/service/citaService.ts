import CitaDto from "../Dto/cita/citaDto";
import CitasRepository from "../repository/citasRepository";

export default class CitaService {
    private repository = new CitasRepository();

    async crearCita(cita: CitaDto){
        return await this.repository.crearCita(cita)
    }

    async getHora(fechaCita : string){
        return await this.repository.getHoras(fechaCita)
    }

    async deleteCita(Id : string){
        return await this.repository.deleteCita(Id)
    }
}