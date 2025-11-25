interface IBiblioteca {
    libro: string;
    autor: string;
    fechaRetiro: Date;
    fechaDevolucion: Date;
    Multa(): number;
}
class Biblioteca implements IBiblioteca {
    private _libro: string;
    private _autor: string;
    private _fechaRetiro: Date;
    private _fechaDevolucion: Date;

    constructor(libro: string, autor: string, fechaRetiro: Date, fechaDevolucion: Date) {
        this._libro = libro;
        this._autor = autor;
        this._fechaRetiro = fechaRetiro;
        this._fechaDevolucion = fechaDevolucion;
    }
    get libro(): string {
        return this._libro;
    }
    set libro(value: string) {
        this._libro = value;
    }
    get autor(): string {
        return this._autor;
    }
    set autor(value: string) {
        this._autor = value;
    }
    get fechaRetiro(): Date {
        return this._fechaRetiro;
    }
    set fechaRetiro(value: Date) {
        this._fechaRetiro = value;
    }
    get fechaDevolucion(): Date {
        return this._fechaDevolucion;
    }
    set fechaDevolucion(value: Date) {
        this._fechaDevolucion = value;
    }