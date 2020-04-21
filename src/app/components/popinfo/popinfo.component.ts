import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  @Input() vehiculo;
 
  constructor() { }

  ngOnInit() {
    console.log(this.vehiculo);
  }

}
