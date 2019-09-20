import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  categories : string[] = [ 'divers','DVD','CD' ,'livres'];

  constructor() { }

  ngOnInit() {
  }

}
