import db from '../config/configBd';
import CitaDto from '../Dto/citaDto';

export default class CitasRepository {
    static async crearCita(){}

    static async getHoras(fecha: Date){
        return await db.execute('SELECT Hora_Cita FROM cita WHERE Fecha_Cita = ?',[fecha]);
    }
}