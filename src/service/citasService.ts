import CitasRepository from "../repository/citasRepository";

export default class CitaService {
    async crearCita(){

    }

    async getHora(horaCita : Date){
        return await CitasRepository.getHoras(horaCita)
    }
}