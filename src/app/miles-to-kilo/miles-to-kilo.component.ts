import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miles-to-kilo',
  templateUrl: './miles-to-kilo.component.html',
  styleUrls: ['./miles-to-kilo.component.css']
})
export class MilesToKiloComponent implements OnInit {

  conversion: string = "";
  sum: number;


  constructor() { }

  onClickMe(myMessage: string){
    this.conversion = myMessage;
  }

  calculate(num: number){
    this.sum = (num*1.609344);
  }


  ngOnInit() {
  }

}
