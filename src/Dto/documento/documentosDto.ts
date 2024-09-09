export default class DocumentDto {
    private _codigoDoc?: number;
    private _url: string;
    private _citaId: number;

    constructor() {
        this.codigoDoc = this.codigoDoc;
        this.url = this.url;
        this.citaId = this.citaId;
    }

    get codigoDoc(): number | undefined {
        return this._codigoDoc;
    }

    set codigoDoc(codigoDoc: number | undefined) {
        this._codigoDoc = codigoDoc;
    }

    get url(): string {
        return this._url;
    }

    set url(url: string) {
        this._url = url;
    }

    get citaId(): number {
        return this._citaId;
    }

    set citaId(citaId: number) {
        this._citaId = citaId;
    }
}
