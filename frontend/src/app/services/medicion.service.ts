import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Log } from '../model/Log';
import { Medicion } from '../model/Medicion';

@Injectable({
  providedIn: 'root'
})
export class MedicionService {
  urlApi = "http://localhost:8051/api/v1";
  headers = {
    headers: new HttpHeaders().set('Accept-Language', 'es'),
  };  

  listado:Array<Log>;
  
  constructor(private _http: HttpClient) {}

  getAllMediciones() {    
    return this._http.get(
      this.urlApi + "/mediciones", 
      this.headers
    ).toPromise();
  }

  async getMedicionByDispositivo(id: string): Promise<Medicion> {    
    try {
      return await this._http.get(
        this.urlApi + `/dispositivos/${id}/mediciones/latest`,
        this.headers
      ).toPromise() as Medicion;
    }catch (err) {
      console.log(err);
      return null;
    }    
  }

  async getMedicionesByDispositivo(id: string): Promise<Medicion[]> {    
    try {
      return await this._http.get(
        this.urlApi + `/dispositivos/${id}/mediciones/all`,
        this.headers
      ).toPromise() as Medicion[];      
    }catch (err) {
      console.log(err);
      return null;
    }    
  }

  async addMedicionDispositivo(data: Medicion): Promise<any> {
    // console.log('data addMedicionDispositivo');
    // console.log(data);

    const body = {
      valor: data.valor, 
      fecha: data.fecha,
      dispositivoId: data.dispositivoId
    };

    const response = await this._http.post(
      this.urlApi + "/mediciones/", 
      body, 
      this.headers
    ).toPromise();

    return response as Log;   
  }
}
