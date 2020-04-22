import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaPage } from './mapa.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';
import { PopConductorComponent } from 'src/app/components/pop-conductor/pop-conductor.component';

const routes: Routes = [
  {
    path: '',
    component: MapaPage
  }
];

@NgModule({
  entryComponents:[
    PopinfoComponent,
    PopConductorComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class MapaPageRoutingModule {}
