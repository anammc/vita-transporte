import { Component, OnInit,Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  @Input() vehiculo;
  @Input() subir;
 
  constructor(
    public alertController: AlertController,
    public popoverCtrl: PopoverController
    ) { }

  ngOnInit() {
    // console.log(this.vehiculo);
    // console.log('subirA',this.subir);
  }

  check(event : any){
    this.subir=event.detail.checked;
    // console.log(this.subir);
    if (this.subir === true) {
      this.presentAlertConfirm();
    }
}

async presentAlertConfirm() {
  const alert = await this.alertController.create({
    header: 'Vehiculo cercano, se encuentra a: ',
    message: this.vehiculo['tiempo']+' Minutos',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          this.subir=false;
          this.popoverCtrl.dismiss({
            subir:this.subir
          });
         // console.log('Confirm Cancel',this.subir);
        }
      }, {
        text: 'Okay',
        handler: () => {
          this.subir=true;
          this.popoverCtrl.dismiss({
            subir:this.subir
          });
         // console.log('Confirm Okay',this.subir);
        }
      }
    ]
  });

  await alert.present();
}

}
