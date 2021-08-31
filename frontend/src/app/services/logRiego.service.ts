import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Log } from '../model/Log';

@Injectable({
  providedIn: 'root'
})
export class LogRiegoService {
  urlApi = "http://localhost:8051/api/v1";
  headers = {
    headers: new HttpHeaders().set('Accept-Language', 'es'),
  };  

  listado:Array<Log>;
  
  constructor(private _http: HttpClient) {}

  getAllLogs() {    
    return this._http.get(
      this.urlApi + "/Logs", 
      this.headers
    ).toPromise();
  }

  async getLogsByDispositivo(id: string): Promise<Log[]> {    
    try {
      return await this._http.get(
        this.urlApi + `/dispositivos/${id}/logs`,
        this.headers
      ).toPromise() as Log[];      
    }catch (err) {
      console.log(err);
      return null;
    }    
  }

  async getActualStateByElectrovalvulaId(id: string): Promise<Log> {
    try {
      console.log(id);
      return await this._http.get(
        this.urlApi + `/electrovalvulas/${id}/logs`,
        this.headers
      ).toPromise() as Log;      
    }catch (err) {
      console.log(err);
      return null;
    }    
  }

  async addLogDispositivo(data: Log): Promise<any> {    
    const body = {
      apertura: data.apertura, 
      fecha: data.fecha, 
      electrovalvulaId: data.electrovalvulaId
    };

    const response = await this._http.post(
      this.urlApi + "/logs/", 
      body, 
      this.headers
    ).toPromise();

    return response as Log;   
  }
}
