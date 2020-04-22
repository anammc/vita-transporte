import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { parada } from 'src/app/interfaces/parada-interfaces';
import { Observable} from 'rxjs';
import { ContenidoService } from 'src/app/services/contenido.service';
// import { AlertController } from '@ionic/angular';
import { rutas } from 'src/app/interfaces/ruta-interfaces';
import {ActivatedRoute} from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';
import { WayPoint } from 'src/app/interfaces/wayPoint';
import { PopConductorComponent } from 'src/app/components/pop-conductor/pop-conductor.component';



declare var google;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  map=null;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();

  markers: Observable<parada[]>;
  datos: Observable<rutas[]>;
  numRuta=null;
  conductor: any;
  vehiculo: any;
  dato: any;
  origin: any;
  destination: any;
  subir=false;
  
  wayPoints:WayPoint[];

  constructor(
     private menuCtrl: MenuController,
     private contenidoService: ContenidoService,
    //  public alertController: AlertController,
     public ruta: ActivatedRoute,
     public popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.wayPoints=[];
    this.origin=null;
    this.destination=null;
    this.datos=this.contenidoService.getRuta();
    this.numRuta=this.ruta.snapshot.paramMap.get('numRuta');
// console.log('subir',this.subir);
    this.validar();
    this.loadMap();
  }


  validar(){
    this.datos.forEach(element => {
     // console.log(element);
      for (const iterator of element) {
        if (this.numRuta === '112B' && iterator['ruta_comercial']  === '112B') {
        this.markers= this.contenidoService.getParada112B();
          this.vehiculo=iterator['vehiculo'];
          this.conductor=iterator['conductor'];        
          this.puntos();
        } 
        if (this.numRuta === '165' && iterator['ruta_comercial']  === '165') {
          this.markers= this.contenidoService.getParada165();
          this.vehiculo=iterator['vehiculo'];         
          this.conductor=iterator['conductor'];         
          this.puntos();
        }
        if (this.numRuta === '191' && iterator['ruta_comercial']  === '191') {
          this.markers= this.contenidoService.getParada191();
          this.vehiculo=iterator['vehiculo'];         
          this.conductor=iterator['conductor'];         
          this.puntos();
        }
        if (this.numRuta === 'T43A' && iterator['ruta_comercial']  === 'T43A') {
          this.markers= this.contenidoService.getParadaT43A();
          this.vehiculo=iterator['vehiculo'];          
          this.conductor=iterator['conductor'];         
          this.puntos();
        }
      }
    });
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
  
    this.map = new google.maps.Map(mapEle, {
      center: this.origin,
      zoom: 12
    });

    this.directionsDisplay.setMap(this.map);
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');   
      this.calculateRoute();  
    });
  }

  puntos(){
    this.markers.forEach(element => {
       this.origin=element.shift()['position'];
       this.destination=element.pop()['position'];   
      for (const iterator of element) {
        this.wayPoints.push({
          location:iterator['position'],
        stopover:iterator['stopover']
       })
      }
    });
  }

  private calculateRoute() {
    this.directionsService.route({
      origin: this.origin,
      destination: this.destination,
      waypoints: this.wayPoints,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (response, status)  => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
    }

  async infVeiculo(ev: any){
    const popover = await this.popoverController.create({
      component: PopinfoComponent,
      componentProps: {
        vehiculo:this.vehiculo,
        subir:this.subir
      },
        event: ev,
        mode:'ios'
    });
     await popover.present();

    const {data}= await popover.onDidDismiss();
    if (data != undefined) {
      this.subir=data['subir'];
     }
    // console.log('padre',data);
    // console.log('pa',this.subir);
  }

  async infConductor(ev: any){
    const popover = await this.popoverController.create({
      component: PopConductorComponent,
      componentProps: {
        conductor:this.conductor
      },
        event: ev,
        mode:'ios'
    });
    return await popover.present();

  }

}
