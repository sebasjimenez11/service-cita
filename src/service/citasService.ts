import CitaDto from "../Dto/citaDto";
import CitasRepository from "../repository/citasRepository";

export default class CitaService {
    async crearCita(cita: CitaDto){
        return await CitasRepository.crearCita(cita)
    }

    async getHora(fechaCita : string){
        return await CitasRepository.getHoras(fechaCita)
    }

    async deleteCita(Id : string){
        return await CitasRepository.deleteCita(Id)
    }
}