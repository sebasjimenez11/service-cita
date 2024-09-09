export default class PagoDto {
    private _codigoPago?: number;
    private _estado: string;
    private _descripcion?: string;
    private _fechaHora: Date;
    private _valor: number;
    private _fKCodigoCita: number;
    private _metodoPago: string; // Método de pago (e.g., "ePayco", "Efectivo")
    private _transaccionId?: string; // ID de la transacción (aplica para ePayco)
    private _referenciaPago?: string; // Referencia interna del pago (aplica para ePayco y otros)
    private _medioPago?: string; // Medio de pago o franquicia (solo ePayco)
    private _estadoTransaccion?: string; // Estado detallado de la transacción (solo ePayco)
    private _detalleRespuesta?: string; // Detalle de la respuesta del pago (solo ePayco)
    private _esPagoEfectivo: boolean; // Indica si es un pago en efectivo
    tipoPago: string;

    constructor() {
        this.codigoPago = this.codigoPago;
        this.estado = this.estado;
        this.descripcion = this.descripcion;
        this.fechaHora = this.fechaHora;
        this.valor = this.valor;
        this.fKCodigoCita = this.fKCodigoCita;
        this.metodoPago = this.metodoPago;
        this.transaccionId = this.transaccionId;
        this.referenciaPago = this.referenciaPago;
        this.medioPago = this.medioPago;
        this.estadoTransaccion = this.estadoTransaccion;
        this.detalleRespuesta = this.detalleRespuesta;
        this.esPagoEfectivo = this.esPagoEfectivo;
    }

    get codigoPago(): number | undefined {
        return this._codigoPago;
    }

    set codigoPago(codigoPago: number | undefined) {
        this._codigoPago = codigoPago;
    }

    get estado(): string {
        return this._estado;
    }

    set estado(estado: string) {
        this._estado = estado;
    }

    get descripcion(): string | undefined {
        return this._descripcion;
    }

    set descripcion(descripcion: string | undefined) {
        this._descripcion = descripcion;
    }

    get fechaHora(): Date {
        return this._fechaHora;
    }

    set fechaHora(fechaHora: Date) {
        this._fechaHora = fechaHora;
    }

    get valor(): number {
        return this._valor;
    }

    set valor(valor: number) {
        this._valor = valor;
    }

    get fKCodigoCita(): number {
        return this._fKCodigoCita;
    }

    set fKCodigoCita(fKCodigoCita: number) {
        this._fKCodigoCita = fKCodigoCita;
    }

    get metodoPago(): string {
        return this._metodoPago;
    }

    set metodoPago(metodoPago: string) {
        this._metodoPago = metodoPago;
    }

    get transaccionId(): string | undefined {
        return this._transaccionId;
    }

    set transaccionId(transaccionId: string | undefined) {
        this._transaccionId = transaccionId;
    }

    get referenciaPago(): string | undefined {
        return this._referenciaPago;
    }

    set referenciaPago(referenciaPago: string | undefined) {
        this._referenciaPago = referenciaPago;
    }

    get medioPago(): string | undefined {
        return this._medioPago;
    }

    set medioPago(medioPago: string | undefined) {
        this._medioPago = medioPago;
    }

    get estadoTransaccion(): string | undefined {
        return this._estadoTransaccion;
    }

    set estadoTransaccion(estadoTransaccion: string | undefined) {
        this._estadoTransaccion = estadoTransaccion;
    }

    get detalleRespuesta(): string | undefined {
        return this._detalleRespuesta;
    }

    set detalleRespuesta(detalleRespuesta: string | undefined) {
        this._detalleRespuesta = detalleRespuesta;
    }

    get esPagoEfectivo(): boolean {
        return this._esPagoEfectivo;
    }

    set esPagoEfectivo(esPagoEfectivo: boolean) {
        this._esPagoEfectivo = esPagoEfectivo;
    }
}
