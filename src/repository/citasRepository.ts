import db from '../config/configBd';
import CitaDto from '../Dto/cita/citaDto';

export default class CitasRepository {
    
    async crearCita(cita : CitaDto){
        try {
            const row = await db.execute('CALL CreateAppointment(?,?,?,?)', [
                cita.horaCita,
                cita.fechaCita,
                cita.fKIdDoct,
                cita.fKIdPac
            ]);
            return {create:true, message: 'creacion de cita exitoso'};
        } catch (error) {
            console.log(error);
            return {create:false, message: error.message};
        }
    }

    async getHoras(fecha: string){
        try {
            const [rows]: any = await db.execute('SELECT Hora_Cita FROM cita WHERE Fecha_Cita = ?', [fecha]);
            const horas = rows.map(row => row.Hora_Cita);
        return { horas };
        } catch (error) {
            console.log(error.message);
            throw new Error('Error fetching hours'); 
        }
    }

    async deleteCita(Id: string) {
        try {
            const row = await db.execute('CALL ',[Id]);
            return {delete: true, message: 'eliminacion de cita exitosa'};
        } catch (error) {
            console.log(error.message);
            return {create:false, message: error.message};
        }
    }

    async updateStatus(codigoCita: string){
        try {
            
        } catch (error) {
            
        }
    }

    async RescheduleAppointment(codigoCita: string){
        try {
            
            
        } catch (error) {
            
        }
    }
}