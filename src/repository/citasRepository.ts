import db from '../config/configBd';
import CitaDto from '../Dto/citaDto';

export default class CitasRepository {
    
    static async crearCita(cita : CitaDto){
        try {
            const row = await db.execute('CALL RescheduleAppointment(?,?,?,?)', [
                cita.horaCita,
                cita.fechaCita,
                cita.fKIdDoct,
                cita.fKIdPac
            ]);
            return {create:true, message: 'creacion de cita exitoso'};
        } catch (error) {
            console.log(error.message);
            return {create:false, message: error.message};
        }
    }

    static async getHoras(fecha: string){
        try {
            const row = await db.execute('SELECT Hora_Cita FROM cita WHERE Fecha_Cita = ?',[fecha]);
            return {horas:row[0]};
        } catch (error) {
            console.log(error.message);
            throw new Error('Error fetching hours'); 
        }
    }

    static async deleteCita(Id: string) {
        try {
            const row = await db.execute('CALL ',[Id]);
            return {delete: true, message: 'eliminacion de cita exitosa'};
        } catch (error) {
            console.log(error.message);
            return {create:false, message: error.message};
        }
    }

    static async updateStatus(codigoCita: string){
        try {
            
        } catch (error) {
            
        }
    }

    static async RescheduleAppointment(codigoCita: string){
        try {
            
            
        } catch (error) {
            
        }
    }
}