import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import {PopinfoComponent} from './popinfo/popinfo.component';



@NgModule({
  declarations: [
    MenuComponent,
    PopinfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    MenuComponent,
    PopinfoComponent
  ]
})
export class ComponentsModule { }
