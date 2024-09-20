export interface Receta {
    Receta_Codigo: string;
    Receta_Medicamento: string;
    Receta_Hora_Inicio: Date;
    Receta_Intervalo: number;
    Receta_Fecha_Inicio: Date;
    Receta_Fecha_Fin: Date;
    Estado_Receta: string;
    Cita_Codigo: string;
    Paciente_Documento: string;
    Paciente_Nombre: string;
    Paciente_Apellido: string;
    Paciente_Email: string;
    Paciente_Id: string;
    Doctor_Id: string;
    Doctor_Documento: string;
    Doctor_Nombre: string;
    Doctor_Apellido: string;
}
