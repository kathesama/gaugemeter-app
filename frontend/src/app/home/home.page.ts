import { Component } from '@angular/core';
import { Dispositivo } from '../model/Dispositivo';
import { DispositivoService } from '../services/dispositivo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listadoDispositivo: any;

  constructor(public dispositivoServ:DispositivoService) {
    this.llamarServiceAsync();
  }

  // llamarServ(){    
  //   this.dispositivoServ.getDispositivos().then((listado: Dispositivo[]) => {
  //     console.log(listado);
  //     this.listadoDispositivo = listado;      
  //     // this.dispositivoServ.getDispositivo(listado[0]).then((dispositivo: Dispositivo) => {}));
  //   }).catch(err => {
  //     console.log(err);
  //   });    
  // }
  
  llamarServiceAsync = async () => {
    // console.log("llamando servicio async");
    this.listadoDispositivo = await this.dispositivoServ.getDispositivos();
    // console.log(this.listadoDispositivo);
    // let valorListadoDispositivo = await this.dispositivoServ.getDispositivo(this.listadoDispositivo[0].dispositivoId);
    // console.log("valorListadoDispositivo");
    // console.log(valorListadoDispositivo);
  }
}
