// import { Component, OnInit } from '@angular/core';
// import { DeviseService } from '../common/service/devise.service';
// import { Devise } from '../common/data/devise';

// @Component({
//   selector: 'app-conversion',
//   templateUrl: './conversion.component.html',
//   styleUrls: ['./conversion.component.scss']
// })
// export class ConversionComponent implements OnInit {
//   montant : number;
//   codeMonnaieSource : string = "EUR";
//   codeMonnaieCible : string = "USD";
//   resultat : number;
//   listeDevises : Devise[]; //ou bien : Array<Devise> ;

//   calculerConversion(){
//       this.deviseService.convertir(this.montant , 
//                                   this.codeMonnaieSource, this.codeMonnaieCible)
//          .subscribe(
//                    (montantconverti : number) => { this.resultat = montantconverti; },
//                    (err) => { console.log(err);} 
//                    );
//   }

//   constructor(private deviseService : DeviseService) {
//     //this.deviseService est un attribut de la classe courante (typescript)
//     //comme ConversionComponent est préfixé par @Component, le paramètre deviseService
//     //est automatiquement initialisé par angular (injection de dépendance) .
//     deviseService.rechercherDevises()
//                   .subscribe(
//                     (devises : Devise[]) => { this.listeDevises = devises;},
//                     (err) => { console.log(err);} 
//                   );
//    }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../common/service/devise.service';
import { Devise } from '../common/data/devise';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {
  montant : number;
  codeMonnaieSource : string = "EUR";
  codeMonnaieCible : string = "USD";
  resultat : number;
  listeDevises : Devise[]; //ou bien : Array<Devise> ;

  calculerConversion(){
      this.deviseService.convertir(this.montant , 
                                  this.codeMonnaieSource, this.codeMonnaieCible)
         .subscribe(
                   (montantconverti : number) => { this.resultat = montantconverti; },
                   (err) => { console.log(err);} 
                   );
  }

  constructor(private deviseService : DeviseService) {
    //this.deviseService est un attribut de la classe courante (typescript)
    //comme ConversionComponent est préfixé par @Component, le paramètre deviseService
    //est automatiquement initialisé par angular (injection de dépendance) .
    deviseService.rechercherDevises()
                  .subscribe(
                    (devises : Devise[]) => { this.listeDevises = devises;},
                    (err) => { console.log(err);} 
                  );
   }

  ngOnInit() {
  }

}

