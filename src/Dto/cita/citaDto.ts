export default class CitaDto {
    private _codigoCita?: number;
    private _horaCita: string; 
    private _fechaCita: Date;
    private _fKIdDoct: string;
    private _fKIdPac: string;

    constructor() {
        this.codigoCita = this.codigoCita;
        this.horaCita = this.horaCita;
        this.fechaCita = this.fechaCita;
        this.fKIdDoct = this.fKIdDoct;
        this.fKIdPac = this.fKIdPac;
    }

    get codigoCita(): number | undefined {
        return this._codigoCita;
    }

    set codigoCita(codigoCita: number | undefined) {
        this._codigoCita = codigoCita;
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

    get fKIdDoct(): string {
        return this._fKIdDoct;
    }

    set fKIdDoct(fKIdDoct: string) {
        this._fKIdDoct = fKIdDoct;
    }

    get fKIdPac(): string {
        return this._fKIdPac;
    }

    set fKIdPac(fKIdPac: string) {
        this._fKIdPac = fKIdPac;
    }
}
