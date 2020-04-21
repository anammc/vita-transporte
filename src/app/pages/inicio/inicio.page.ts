import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuario={
    email:'',
    password:''
  };

  constructor(
    public alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitTemplate(){
    //console.log(this.usuario);
    if (this.usuario.email === 'vita@gmail.com' && this.usuario.password === 'vita') {
        this.router.navigate(["/ruta"]);
    } else {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Ups!',
      message: 'Usuario o contraseña incorrecto',
      buttons: ['OK']
    });

    await alert.present();
  }

}
