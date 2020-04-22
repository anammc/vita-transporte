import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pop-conductor',
  templateUrl: './pop-conductor.component.html',
  styleUrls: ['./pop-conductor.component.scss'],
})
export class PopConductorComponent implements OnInit {

  @Input() conductor;

  constructor() { }

  ngOnInit() {
    // console.log(this.conductor);
  }

}
