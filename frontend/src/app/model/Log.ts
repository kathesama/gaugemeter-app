export class Log{    
    private _fecha: Date; 
    private _apertura: number;
    private _electrovalvulaId: string;

    constructor(fecha, apertura, electrovalvulaId){
        this._fecha=fecha;
        this._apertura=apertura;
        this._electrovalvulaId=electrovalvulaId;
    }    

    get fecha(): Date {
        return this._fecha;
    }
    
    set fecha(value: Date) {
        this._fecha = value;
    }

    get apertura(): number {
        return this._apertura;
    }

    set apertura(value: number) {
        this._apertura = value;
    }
    
    get electrovalvulaId(): string {
        return this._electrovalvulaId;
    }

    set electrovalvulaId(value: string) {
        this._electrovalvulaId = value;
    }

    toJson(): string {
        const jsonObj = {
            apertura: this.apertura, 
            fecha: this.fecha, 
            electrovalvulaId: this.electrovalvulaId
          };
        return JSON.stringify(jsonObj);
    }
}