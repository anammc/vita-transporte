import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {PopinfoComponent} from './popinfo/popinfo.component';
import {PopConductorComponent} from './pop-conductor/pop-conductor.component';



@NgModule({
  declarations: [
    PopinfoComponent,
    PopConductorComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PopinfoComponent,
    PopConductorComponent
  ]
})
export class ComponentsModule { }
