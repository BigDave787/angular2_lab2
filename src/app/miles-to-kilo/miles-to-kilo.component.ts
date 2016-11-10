import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miles-to-kilo',
  templateUrl: './miles-to-kilo.component.html',
  styleUrls: ['./miles-to-kilo.component.css']
})
export class MilesToKiloComponent implements OnInit {

  conversion: string = "";

  constructor() { }

  onClickMe(myMessage: string){
    this.conversion = myMessage;
  }

  ngOnInit() {
  }

}
