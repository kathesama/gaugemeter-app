import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dispositivo } from '../model/Dispositivo';
import { DispositivoService } from '../services/dispositivo.service';
import { Log } from '../model/Log';
import { LogRiegoService } from '../services/logRiego.service';
// import timeZone from 'mongoose-timezone';
import { DatePipe } from '@angular/common';
import { Medicion } from '../model/Medicion';
import { MedicionService } from '../services/medicion.service';
import * as Highcharts from 'highcharts';
import { isNil, isEmpty } from 'lodash';
import { LoadingController } from '@ionic/angular';
import { IonLoaderService } from '../services/ionLoader.service';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
  providers: [DatePipe]
})

export class DispositivoPage implements OnInit {

  public device: any;
  public actualMeasure: Medicion = new Medicion(null, 100, '');

  private electrovalvulaId: string = ''
  private valorObtenido: any = 0;
  
  public myChart: any;
  private chartOptions: any;

  public logs: Log[] = [];
  private mostrarLogs: boolean = false;
  
  public mediciones: Medicion[] = [];
  private mostrarMediciones: boolean = false;
  
  private estaAbierto: number = 0;

  constructor(
    private router:ActivatedRoute, 
    private dispositivoService:DispositivoService, 
    private logRiegoService:LogRiegoService, 
    private medicionService:MedicionService, 
    private datePipe: DatePipe,
    public loadingController: LoadingController
  ) {
    this.loadData(this.router.snapshot.paramMap.get('id'));

    setTimeout(() => {      
      this.updateChartValue(this.getActualMeasureValure());
      // console.log(this.device);
      // console.log(this.device.electrovalvulaID);
      this.loadValveState(this.device.electrovalvulaID);
    }, 1000);
  } 

  async loadData(idDispositivo: string) {  
    this.device = await this.dispositivoService.getDispositivo(idDispositivo).then((data: Dispositivo) => {                 
        return data;
      }
    );        
    
    await this.loadLogs();

    await this.loadMediciones(true).then(() => {   
        this.actualMeasure = this.mediciones[0];        
      }
    );    
  }

  ngOnInit(){}

  ionViewWillEnter(){    
    this.generarChart();
  }

  ionViewDidEnter() {}

  async toggleValvula() {            
    let formatted_date = this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss').concat('Z');    
    
    if (this.estaAbierto == 1) {      
      this.saveMediciones(formatted_date);      
    }else{
      this.estaAbierto = 1;
    };

    this.saveLogs(formatted_date);

    this.loadLogs();      
  }

  toggleMediciones() { 
    this.mostrarMediciones = !this.mostrarMediciones
  };

  toggleLogs() {
    this.mostrarLogs = !this.mostrarLogs
  }; 

  async loadValveState(id: string) {
    await this.logRiegoService.getActualStateByElectrovalvulaId(id).then(
      (log: Log) => {
        console.log(log);
        this.estaAbierto = log.apertura;
      }
    );
  }

  async saveMediciones(date: string) {    
    let lecture = Math.round(Math.random() * (100 - new Date(date).getSeconds()));
    
    let measureObj: Medicion = new Medicion(date, lecture, this.device.dispositivoId);

    this.medicionService.addMedicionDispositivo(measureObj);

    this.updateChartValue(lecture);

    this.estaAbierto = 0;
  }

  async saveLogs(date: string){
    let log: Log = new Log(date, this.estaAbierto, this.device.electrovalvulaID);
    console.log(log);    
    this.logRiegoService.addLogDispositivo(log);  
  }

  async loadLogs(){
    this.logs = await this
      .logRiegoService.getLogsByDispositivo(this.device.dispositivoId)
      .then((logs) => {        
        this.logs = logs;
        console.log(logs);
        return logs;
      }); 
  }

  async loadMediciones(loadAll: boolean = true) {
    if (!loadAll) {      
    }else{
      this.mediciones = await this
      .medicionService.getMedicionesByDispositivo(this.device.dispositivoId)
      .then((mediciones: Medicion[]) => {        
        this.mediciones = mediciones;        
        this.actualMeasure = mediciones[0];        

        this.updateChartValue(this.getActualMeasureValure());

        this.generarChart();
        return mediciones;
      }); 
    }    
  }

  getActualMeasureValure(): number {
    return isNil(this.actualMeasure)? 0 : this.actualMeasure.valor; 
  }

  updateChartValue(medicion: any) {    
    this.myChart?.update({
      series: [{
        name: 'kPA',
        data: [+medicion],
        tooltip: {
          valueSuffix: ' kPA'
        }
      }]
    });
  }

  generarChart() {    
    this.chartOptions = {
      chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: `Sensor N° ` + this.router.snapshot.paramMap.get('id')
      }, 
      credits: { enabled: false }, 
      pane: {
        startAngle: -150,
        endAngle: 150
      }, 
      yAxis: {
        min: 0,
        max: 100,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
          step: 2,
          rotation: 'auto'
        },
        title: {
          text: 'kPA'
        },
        plotBands: [{
          from: 0,
          to: 10,
          color: '#55BF3B' // green
        }, {
          from: 10,
          to: 30,
          color: '#DDDF0D' // yellow
        }, {
          from: 30,
          to: 100,
          color: '#DF5353' // red
        }]
      },
      series: [{
        name: 'kPA',
        data: [+this.getActualMeasureValure()],
        tooltip: {
          valueSuffix: ' kPA'
        }
      }]
    };

    this.myChart = Highcharts.chart('highcharts', this.chartOptions);    
  }
}
