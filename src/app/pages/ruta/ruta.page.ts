import { Component, OnInit } from '@angular/core';
import { rutas } from 'src/app/interfaces/ruta-interfaces';
import { Observable} from 'rxjs';
import { ContenidoService } from 'src/app/services/contenido.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.page.html',
  styleUrls: ['./ruta.page.scss'],
})
export class RutaPage implements OnInit {

  ruta: Observable<rutas[]>;

  constructor(
    private contenidoService: ContenidoService,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.ruta= this.contenidoService.getRuta();
  }

  getRuta(numRuta){
    this.navCtrl.navigateForward(`paradas/${numRuta}`);
  }
  
}
