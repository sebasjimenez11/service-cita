import NotaMedicaDto from "../Dto/notas/notasDto";
import db from '../config/configBd';

export default class NotasRepository {
    async createNota(notasMedicas: NotaMedicaDto) {
        try {
            const [row] = await db.execute('CALL CrearNotaMedica(?, ?)', [
                notasMedicas.descripcion,
                notasMedicas.fkCodigoCita
            ]);

            return {
                create: true,
                message: "Creación de nota médica exitosa",
            };
        } catch (error) {
            console.error("Error en createNota:", error); // Loguea el error para depuración
            return {
                create: false,
                message: "Error al crear la nota médica",
                error: error.message, // Incluye el mensaje de error si es necesario
            };
        }
    }

    async getNotasByIdDoctor(codigoCita: string, IdPaciente: string, IdDoctor: string) {
        try {
            const [row] = await db.execute(
                'SELECT * FROM vista_Notas_Medicas WHERE Cita_Codigo = ? AND Paciente_Id = ? AND Doctor_Id = ?',
                [codigoCita, IdPaciente, IdDoctor]
            );

            return row; // Devuelve las notas encontradas
        } catch (error) {
            console.error("Error en getNotasByIdDoctor:", error); // Loguea el error
            throw new Error(`Error al obtener las notas del doctor: ${error.message}`);
        }
    }

    async getNotasByIdPatient(IdPaciente: string) {
        try {
            const [row] = await db.execute(
                'SELECT * FROM vista_Notas_Medicas WHERE Paciente_Id = ?',
                [IdPaciente]
            );

            return row; // Devuelve las notas encontradas
        } catch (error) {
            console.error("Error en getNotasByIdPatient:", error); // Loguea el error
            throw new Error(`Error al obtener las notas del paciente: ${error.message}`);
        }
    }
}
