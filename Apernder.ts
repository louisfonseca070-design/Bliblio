interface ICita {
  mostrarResumen(paciente: string, fecha: Date, medico: string, valor: number): string;
}

class Cita implements ICita{
    private _paciente: string;
    private _fecha: Date;
    private _medico: string;
    private _valor: number;


    constructor(paciente: string, fecha: Date, medico:string, valor: number){
        this._paciente = paciente;
        this._fecha = fecha;
        this._medico = medico;
        this._valor = valor;
    }

    mostrarResumen(paciente: string, fecha: Date, medico: string, valor: number): string {
        return `Paciente: ${paciente}, Fecha: ${fecha}, Medico: ${medico}, Valor: ${valor}`;
    }

    calcularCosto(): number{
        return this._valor;
    }

    public get paciente(): string {
        return this._paciente;
    }
    public set paciente(value: string) {
        this._paciente = value;
    }
    public get fecha(): Date {
        return this._fecha;
    }
    public set fecha(value: Date) {
        this._fecha = value;
    }

    public get medico(): string {
        return this._medico;
    }
    public set medico(value: string) {
        this._medico = value;
    }
    public get valor(): number {
        return this._valor;
    }
    public set valor(value: number) {
        this._valor = value;
    }
}

class CitaGeneral extends Cita {
    adicionalGeneral: number;

    constructor(paciente: string, fecha: Date, medico: string, valor: number, adicionalGeneral: number){
        super(paciente, fecha, medico, valor);
        this.adicionalGeneral = adicionalGeneral;
    }

    calcularCosto(): number {
        return this.valor + this.adicionalGeneral;
    }
}

class CitaEspecialista extends Cita {
    adicionalEspecialista: number;

    constructor(paciente: string, fecha: Date, medico: string, valor: number, adicionalEspecialista: number){
        super(paciente, fecha, medico, valor);
        this.adicionalEspecialista = adicionalEspecialista;
    }

    calcularCosto(): number {
        return this.valor + this.adicionalEspecialista;
    }
}

class Medico {
    nombre: string;
    especialidad: string;
    tarifaBase: number;

    constructor(nombre: string, especialidad: string, tarifaBase: number){
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.tarifaBase = tarifaBase;
    }

    mostrarPerfil(){
        console.log(`Medico: ${this.nombre}, Especialidad: ${this.especialidad}, Tarifa base: ${this.tarifaBase}`);
    }
}

const medico1 = new Medico('Juan', 'cardiologo', 10000000);
const medico2 = new Medico('Andres', 'otraEspecialidad', 10000000);

const cita1 = new Cita('Felipe', new Date(), medico1.nombre, medico1.tarifaBase);
const citaEspecialista1 = new CitaEspecialista('Arley', new Date(), medico2.nombre, medico2.tarifaBase, 10000);
const citaGeneral1 = new CitaGeneral('Paola', new Date(), medico2.nombre, medico2.tarifaBase, 20000);

let arrCitas = [];
arrCitas.push(cita1, citaEspecialista1, citaGeneral1);

arrCitas.forEach(element => {
    console.log(element.mostrarResumen(element.paciente, element.fecha, element.medico, element.calcularCosto()));
});

