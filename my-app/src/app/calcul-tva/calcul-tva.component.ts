import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul-tva',
  templateUrl: './calcul-tva.component.html',
  styleUrls: ['./calcul-tva.component.css']
})
export class CalculTvaComponent implements OnInit {

  ht : number;
  taux : number = 20;
  tva : number;
  ttc : number;

  calculer(){
    this.tva = this.ht *this.taux /100;
    this.ttc = Number(this.ht) + this.tva;
  }





  constructor() { }

  ngOnInit() {
  }

}
