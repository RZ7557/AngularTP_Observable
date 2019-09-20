import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/common/service/product.service';
import { Product } from 'src/app/common/data/product';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-list-prod',
  templateUrl: './list-prod.component.html',
  styleUrls: ['./list-prod.component.scss']
})
export class ListProdComponent implements OnInit {

  listeProduits : Product[];
  categorie : string = "divers"; //valeur par défaut

  constructor(private productService : ProductService,
              private route : ActivatedRoute) { }

  ngOnInit() {
    //via subscribe() , on enregistre ici une callback qui 
    //sera ultérieurement re-déclenchée chaque fois que la fin
    //d'url change /listProd/CD , listProd/DVD
     this.route.params.subscribe(
       (params: Params) => { this.categorie = params['category'];
                             this.fetchProducts(); }
     );
    //{ path: 'listProd/:category', component: ListProdComponent } 
  }

  fetchProducts(){
    this.productService.getProductsByCategoryObservable(this.categorie)
    .subscribe(
      (produits)=>{this.listeProduits=produits;}
    );
  }

}
