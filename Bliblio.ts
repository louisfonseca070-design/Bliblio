interface IBibliotecaItem{
    id: number;
    title: string;   
    author: string;
    paginas: number;
    edicion: number;
    mostrarInfo(): string;
}

class ItemBiblioteca implements IBibliotecaItem {
    private _id: number;
    private _title: string;
    private _author: string;
    private _paginas: number;
    private _edicion: number;

    constructor(id: number, title: string, author: string, paginas: number, edicion: number) {
        this._id = id;
        this._title = title;
        this._author = author;
        this._paginas = paginas;
        this._edicion = edicion;
    }
    get id(): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }
    get title(): string {
        return this._title;
    }
    set title(value: string) {
        this._title = value;
    }
    get author(): string {
        return this._author;
    }
    set author(value: string) {
        this._author = value;
    }
    get paginas(): number {
        return this._paginas;
    }
    set paginas(value: number) {
        this._paginas = value;
    }
    get edicion(): number {
        return this._edicion;
    }
    set edicion(value: number) {
        this._edicion = value;
    }
    mostrarInfo(): string {
        return `ID: ${this._id}, Title: ${this._title}, Author: ${this._author}, Paginas: ${this._paginas}, Edicion: ${this._edicion}`;
    }
}

class Libro extends ItemBiblioteca {
    constructor(id: number, title: string, author: string, paginas: number, edicion: number) {
        super(id, title, author, paginas, edicion);
    }

    override mostrarInfo(): string {
        return `author: ${this.author}, paginas: ${this.paginas}, ${super.mostrarInfo()}`;
    }
}

class Revista extends ItemBiblioteca {
    constructor(id: number, title: string, author: string, paginas: number, edicion: number) {
        super(id, title, author, paginas, edicion);
    }

    override mostrarInfo(): string {
        return `edicion: ${this.edicion}, ${super.mostrarInfo()}`;
    }
}

class Usuario {
    private _nombre: string;
    private _documento: string;

    constructor(nombre: string, documento: string) {
        this._nombre = nombre;
        this._documento = documento;
    }

    get nombre(): string {
        return this._nombre;
    }
    set nombre(value: string) {
        this._nombre = value;
    }
    get documento(): string {
        return this._documento;
    }
    set documento(value: string) {
        this._documento = value;
    }

    mostrarInfo(): string {
        return `Usuario: ${this._nombre}, Documento: ${this._documento}`;
    }
}
class biblioteca {
    private _nombre: string;
    private _direccion: string;

}

get nombre(): string {
        return this._nombre;
}

set nombre(value: string) {
        this._nombre = value;
}
get direccion(): string {
        return this._direccion;
}
set direccion(value: string) {
        this._direccion = value;
}
class prestamo {
    private _usuario: string;
    private _documentousuario: number;
    private _biblioteca: string;
    private _iditem: number;
