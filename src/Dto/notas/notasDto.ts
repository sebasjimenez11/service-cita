export default class NotaMedicaDto {
    private _codigoNot?: number;
    private _descripcion: string;
    private _fkCodigoCita: number;

    constructor() {
        this.codigoNot = this.codigoNot;
        this.descripcion = this.descripcion;
        this.fkCodigoCita = this.fkCodigoCita;
    }

    get codigoNot(): number | undefined {
        return this._codigoNot;
    }

    set codigoNot(codigoNot: number | undefined) {
        this._codigoNot = codigoNot;
    }

    get descripcion(): string {
        return this._descripcion;
    }

    set descripcion(descripcion: string) {
        this._descripcion = descripcion;
    }

    get fkCodigoCita(): number {
        return this._fkCodigoCita;
    }

    set fkCodigoCita(fkCodigoCita: number) {
        this._fkCodigoCita = fkCodigoCita;
    }
}
