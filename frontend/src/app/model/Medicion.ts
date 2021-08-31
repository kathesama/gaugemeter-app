export class Medicion{    
    private _fecha: Date; 
    private _valor: number;
    private _dispositivoId: string;

    constructor(fecha, valor, dispositivoId){
        this._fecha=fecha;
        this._valor=valor;
        this._dispositivoId=dispositivoId;
    }

    public get fecha(): Date {
        return this._fecha;
    }
    public set fecha(value: Date) {
        this._fecha = value;
    }

    public get valor(): number {
        return this._valor;
    }
    public set valor(value: number) {
        this._valor = value;
    }
    
    public get dispositivoId(): string {
        return this._dispositivoId;
    }
    public set dispositivoId(value: string) {
        this._dispositivoId = value;
    }
}