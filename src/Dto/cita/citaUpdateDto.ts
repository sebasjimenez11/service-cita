export default class CitaUpdateDto {
    private _codigoCita: number;
    private _estadoCita: string;
    private _horaCita: string; 
    private _fechaCita: Date;
    private _emailPatient: string;
    private _motivcoCita: string;

    constructor() {
        this.codigoCita = this.codigoCita;
        this.horaCita = this.horaCita;
        this.fechaCita = this.fechaCita;
        this.emailPatient = this.emailPatient;
    }
    get codigoCita(): number{
        return this._codigoCita;
    }

    set codigoCita(codigoCita: number) {
        this._codigoCita = codigoCita;
    }

    get estadoCita(): string{
        return this._estadoCita;
    }

    set estadoCita(estadoCita: string) {
        this._estadoCita = estadoCita;
    }

    get horaCita(): string {
        return this._horaCita;
    }

    set horaCita(horaCita: string) {
        this._horaCita = horaCita;
    }

    get fechaCita(): Date {
        return this._fechaCita;
    }

    set fechaCita(fechaCita: Date) {
        this._fechaCita = fechaCita;
    }

    get emailPatient(): string {
        return this._emailPatient;
    }

    set emailPatient(emailPacient: string) {
        this._emailPatient = emailPacient;
    }

    get motivoCita(): string {
        return this._motivcoCita;
    }

    set motivoCita(motivoCita: string) {
        this._motivcoCita = motivoCita;
    }
}