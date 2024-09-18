import db from '../config/configBd';
import CitaDto from '../Dto/cita/citaDto';
import CitaUpdateDto from '../Dto/cita/citaUpdateDto';
import documentosDto from '../Dto/documento/documentosDto';

export default class CitasRepository {
    async crearCita(cita: CitaDto) {
        try {
            const [rows] = await db.execute('CALL CreateAppointment(?,?,?,?)', [
                cita.horaCita,
                cita.fechaCita,
                cita.fKIdDoct,
                cita.fKIdPac,
            ]);

            const createdId = rows[0][0].citaId;
    
            return {
                create: true,
                message: 'Creación de cita exitosa',
                citaId: createdId,  // Retornar el ID creado
                email: cita.EmailPac
            };
        } catch (error) {
            console.log(error);
            return { create: false, message: error.message };
        }
    }
    

    async getHoras(fecha: string, IdMedico: string){
        try {
            const [rows]: any = await db.execute('SELECT Hora_Cita FROM cita WHERE Fecha_Cita = ? and FKId_Doct = ?', [fecha, IdMedico]);
            const horas = rows.map(row => row.Hora_Cita);
        return { horas };
        } catch (error) {
            console.log(error.message);
            throw new Error('Error fetching hours'); 
        }
    }

    async updateStatus(cita: CitaUpdateDto){
        try {
            const row = await db.execute('CALL CancelAppointment(?,?)',[
                cita.codigoCita,
                cita.estadoCita
            ])
            return {update: true, message: 'actualizacion de estado exitosa', estado: cita.estadoCita, email : cita.emailPatient};
        } catch (error) {
            throw new Error('Error al actualizar el estado de la cita'); 
        }
    }

    async RescheduleAppointment(cita: CitaUpdateDto){
        try {
            const row = await db.execute('CALL RescheduleAppointment(?,?,?,?)',[
                cita.codigoCita,
                cita.estadoCita,
                cita.horaCita,
                cita.fechaCita
            ])
            return {Reschedule: true, message: "reagendamiento exitoso", email: cita.emailPatient};
        } catch (error) {
            console.log(error.message);
            throw new Error('Error al reagendar la cita'); 
        }
    }

    async getCita(IdUser: string, UserRole: string) {
        try {
            let query = "SELECT * FROM vista_cita_completa";
            const queryParams: string[] = [];
            const conditions: string[] = [];
    
        
            if (IdUser && UserRole === 'medico') {
                conditions.push("idDoctor = ?");
                queryParams.push(IdUser);
            }
    
            if (IdUser && UserRole == 'paciente') {
                conditions.push("idPaciente = ?");
                queryParams.push(IdUser);
            }
    
            if (conditions.length > 0) {
                query += " WHERE " + conditions.join(" AND ");
            }
    
            // Ejecutar consulta
            const [rows] = await db.execute(query, queryParams);
            return rows;
        } catch (error) {
            console.error('Error al traer las citas:', error.message);
            throw new Error('Error al traer las citas');
        }
    }
    
    async crearDocumentos(documentDtos: documentosDto[]): Promise<any> {
        const sql = `INSERT INTO documentos (url, citaId) VALUES ?`;
        const values = documentDtos.map((doc) => [doc.url, doc.citaId]);
        
        try {
            const result = await db.query(sql, [values]);
            return { create: true, result };
        } catch (error) {
            console.error('Error al guardar documentos en la BD:', error.message);
            return { create: false, message: 'Error al guardar documentos' };
        }
    }

    async getByCodigoCita(codigoCita: string) {
        try {           
            // Ejecuta la consulta SQL
            const [rows]: [any[], any] = await db.execute(
                "SELECT * FROM vista_cita_completa WHERE codigoCita = ?", 
                [codigoCita]
            );
    
            // Verifica si se encontraron resultados
            if (rows.length === 0) {
                throw new Error('No se encontró la cita con el código proporcionado.');
            }
    
            // Retorna la primera fila de resultados
            return {cita: rows[0]}
        } catch (error) {
            console.error('Error al traer la cita:', error.message);
            throw new Error('Error al traer la cita');
        }
    }
    
    
}