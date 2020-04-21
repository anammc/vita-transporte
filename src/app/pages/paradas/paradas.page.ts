import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { ContenidoService } from 'src/app/services/contenido.service';
import { parada } from 'src/app/interfaces/parada-interfaces';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-paradas',
  templateUrl: './paradas.page.html',
  styleUrls: ['./paradas.page.scss'],
})
export class ParadasPage implements OnInit {

  parada: Observable<parada[]>;
  numRuta: string;
  nombre: string;

  constructor(
    private contenidoService: ContenidoService,
    public ruta: ActivatedRoute,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.numRuta=this.ruta.snapshot.paramMap.get('numero');

    if (this.numRuta === '112B') {
       this.parada= this.contenidoService.getParada112B();
    } 
    if (this.numRuta === '165') {
      this.parada= this.contenidoService.getParada165();
    }
    if (this.numRuta === '191') {
      this.parada= this.contenidoService.getParada191();
    }
    if (this.numRuta === 'T43A') {
      this.parada= this.contenidoService.getParadaT43A();
    }
    
  }

  getParada(){
    //console.log(this.nombre);
    this.navCtrl.navigateForward(`mapa/${this.numRuta}`);
  }

}
