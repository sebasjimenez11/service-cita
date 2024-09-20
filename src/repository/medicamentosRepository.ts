import RecetaDto from "../Dto/medicamentos/medicamentosDto";
import { Receta } from "../config/common/interfaces/receta";
import db from '../config/configBd';


export default class medicamentosRepository {
    async createMedicamento(receta: RecetaDto){
        try {
            const [rows] = await db.execute('CALL CrearReceta(?,?,?,?,?,?,?,?)', [
                receta.medicamentoNom,
                receta.descripcionMed,
                receta.fechaInicio,
                receta.horaInicio,
                receta.intervalo,
                'inactivo',
                receta.fkCodigoCita
            ]);

            return {
                create : true,
                message : "creacion de receta Exitosa"
            }
        } catch (error) {
            console.error("Error en getNotasByIdDoctor:", error); // Loguea el error
            throw new Error(`Error al obtener los medicamentos: ${error.message}`);
        }
    }

    async getActiveMedicamentos(): Promise<Receta[]> {
        try {
          const [rows] = await db.execute('SELECT * FROM vista_Recetas_Medicas WHERE Estado_Receta = "activo"');
          const medicamentosActivos = rows as Receta[];
          return medicamentosActivos;
        } catch (error) {
          throw new Error(`Error al obtener los medicamentos activos: ${error.message}`);
        }
    }

    async getMedicamentosByIdMedico (codigoCita:string, IdPaciente: string, IdDoctor: string){
        try {
            const [row] = await db.execute('SELECT * FROM vista_Recetas_Medicas WHERE Cita_Codigo = ? AND Paciente_Id = ? AND Doctor_Id = ?',[codigoCita, IdPaciente, IdDoctor]);
            return row;
        } catch (error) {
            console.error("Error en getMedicamentosByIdMedico:", error); // Loguea el error
            throw new Error(`Error al obtener los medicamentos: ${error.message}`);
        }
    }

    async getMedicamentosByIdPaciente (IdPaciente: string){
        try {
            const [row] = await db.execute('SELECT * FROM vista_Recetas_Medicas WHERE Paciente_Id = ?',[IdPaciente]);
            return row;
        } catch (error) {
            console.error("Error en getMedicamentosByIdMedico:", error); 
            throw new Error(`Error al obtener los medicamentos: ${error.message}`);
        }
    }

    async updateStatus(estado: string, codigoReceta: string){
        try {
            const [row] = await db.execute('CALL ActualizarEstadoReceta(?,?)',[codigoReceta, estado]);

            return {
                update: true,
                message: 'Actualización de estado exitosa'
            };
        } catch (error) {
            throw new Error('Error actualizando el estado: ' + error.message);
        }
    }
}