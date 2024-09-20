export default class RecetaDto {
    private _codigoRec?: number;
    private _medicamentoNom: string;
    private _descripcionMed?: string;
    private _fechaInicio: Date;
    private _fechaFin: Date;
    private _horaInicio: string;
    private _intervalo: number;
    private _estado: 'activo' | 'inactivo';
    private _fkCodigoCita: number;

    constructor() {
        this.codigoRec = this.codigoRec;
        this.medicamentoNom = this.medicamentoNom;
        this.descripcionMed = this.descripcionMed;
        this.fechaInicio = this.fechaInicio;
        this.fechaFin = this.fechaFin;
        this.horaInicio = this.horaInicio;
        this.intervalo = this.intervalo;
        this.estado = this.estado;
        this.fkCodigoCita = this.fkCodigoCita;
    }

    get codigoRec(): number | undefined {
        return this._codigoRec;
    }

    set codigoRec(codigoRec: number | undefined) {
        this._codigoRec = codigoRec;
    }

    get medicamentoNom(): string {
        return this._medicamentoNom;
    }

    set medicamentoNom(medicamentoNom: string) {
        this._medicamentoNom = medicamentoNom;
    }

    get descripcionMed(): string | undefined {
        return this._descripcionMed;
    }

    set descripcionMed(descripcionMed: string | undefined) {
        this._descripcionMed = descripcionMed;
    }

    get fechaInicio(): Date {
        return this._fechaInicio;
    }

    set fechaInicio(fechaInicio: Date) {
        this._fechaInicio = fechaInicio;
    }

    get fechaFin(): Date {
        return this._fechaFin;
    }

    set fechaFin(fechaFin: Date) {
        this._fechaFin = fechaFin;
    }

    get horaInicio(): string {
        return this._horaInicio;
    }

    set horaInicio(horaInicio: string) {
        this._horaInicio = horaInicio;
    }

    get intervalo(): number {
        return this._intervalo;
    }

    set intervalo(intervalo: number) {
        this._intervalo = intervalo;
    }

    get estado(): 'activo' | 'inactivo' {
        return this._estado;
    }

    set estado(estado: 'activo' | 'inactivo') {
        this._estado = estado;
    }

    get fkCodigoCita(): number {
        return this._fkCodigoCita;
    }

    set fkCodigoCita(fkCodigoCita: number) {
        this._fkCodigoCita = fkCodigoCita;
    }
}
