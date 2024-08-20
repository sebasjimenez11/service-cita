import db from '../config/configBd';
import CitaDto from '../Dto/citaDto';

export default class CitasRepository {
    static async crearCita(){}

    static async getHoras(fecha: string){
        try {
            const row = await db.execute('SELECT Hora_Cita FROM cita WHERE Fecha_Cita = ?',[fecha]);
            return {horas:row[0]};
        } catch (error) {
            console.log(error.message);
            throw new Error('Error fetching hours'); 
        }
    }
}