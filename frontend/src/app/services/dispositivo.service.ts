import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dispositivo } from '../model/Dispositivo';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
  urlApi = "http://localhost:8051/api/v1";
  headers = new HttpHeaders().set('Accept-Language', 'es');
  options = {
    headers: this.headers
  }

  listado:Array<Dispositivo>;
  
  constructor(private _http: HttpClient) {}

  getDispositivos() {
    //  return this._http.post(this.urlApi + "/dispositivos", {BODY});
    return this._http.get(this.urlApi + "/dispositivos", this.options).toPromise();
  }

  getDispositivo(id: string) {
    // console.log(id);
    return this._http.get(this.urlApi + "/dispositivos/" + id, this.options).toPromise();    
    // return response as Dispositivo;   
  }

  getValvulaByDispositivo(id: string) {}
}
