import notasRepository from "../repository/notasRepository";
import NotaMedicaDto from "../Dto/notas/notasDto";

export default class notasService {
    private repository: notasRepository = new notasRepository();

    async createNotas(notasMedica : NotaMedicaDto){
        return await this.repository.createNota(notasMedica)
    }

    async getNotasByIdDoctor(codigoCita: string, IdPaciente: string, IdDoctor: string){
        return await this.repository.getNotasByIdDoctor(codigoCita, IdPaciente, IdDoctor);
    }

    async getNotasByIdPaciente(IdPaciente: string){
        return await this.repository.getNotasByIdPatient(IdPaciente);
    }
}