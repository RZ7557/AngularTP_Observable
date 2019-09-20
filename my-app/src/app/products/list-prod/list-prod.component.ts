import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/common/service/product.service';
import { Product } from 'src/app/common/data/product';

@Component({
  selector: 'app-list-prod',
  templateUrl: './list-prod.component.html',
  styleUrls: ['./list-prod.component.scss']
})
export class ListProdComponent implements OnInit {

  listeProduits : Product[];
  categorie : string = "divers"; //valeur par défaut

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.productService.getProductsByCategoryObservable(this.categorie)
    .subscribe(
      (produits)=>{this.listeProduits=produits;}
    );
  }

}
