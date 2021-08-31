export class Dispositivo{
    private _uuid: string;
    private _nombre: string; 
    private _ubicacion: string;
    private _electrovalvulaId: string;

    constructor(uuid: string, nombre: string, ubicacion: string, electrovalvulaId: string){
        this._uuid= uuid;
        this._nombre= nombre;
        this._ubicacion= ubicacion;
        this._electrovalvulaId= electrovalvulaId;
    }

    public get dispositivoId(): string {
        return this._uuid;
    }
    public set dispositivoId(value: string) {
        this._uuid = value;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get ubicacion(): string {
        return this._ubicacion;
    }
    public set ubicacion(value: string) {
        this._ubicacion = value;
    }
    
    public get electrovalvulaId(): string {
        return this._electrovalvulaId;
    }
    public set electrovalvulaId(value: string) {
        this._electrovalvulaId = value;
    }
}