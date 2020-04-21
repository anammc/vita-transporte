import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { rutas } from '../interfaces/ruta-interfaces';
import { parada } from '../interfaces/parada-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  constructor(
    private http: HttpClient
  ) { }

  getRuta(){
    return this.http.get<rutas[]>('/assets/data/ruta.json');
  }

  getParada112B(){
    return this.http.get<parada[]>('/assets/data/paradas-112B.json');
  }

  getParada165(){
    return this.http.get<parada[]>('/assets/data/paradas-165.json');
  }

  getParada191(){
    return this.http.get<parada[]>('/assets/data/paradas-191.json');
  }

  getParadaT43A(){
    return this.http.get<parada[]>('/assets/data/paradas-T43A.json');
  }
}
