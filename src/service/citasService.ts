import CitasRepository from "../repository/citasRepository";

export default class CitaService {
    async crearCita(){

    }

    async getHora(fechaCita : string){
        return await CitasRepository.getHoras(fechaCita)
    }
}