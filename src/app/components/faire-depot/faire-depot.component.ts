import { CompteService } from './../../services/compte.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faire-depot',
  templateUrl: './faire-depot.component.html',
  styleUrls: ['./faire-depot.component.scss']
})
export class FaireDepotComponent implements OnInit {
  formCompte:FormGroup;
  iri;
  montant;
  numCompte;

  constructor(
    private serviceCmpt:CompteService
  ) { }

  ngOnInit() {
    this.formCompte = new FormGroup({
      numCompte:new FormControl(''),
      montant:new FormControl('')
    })
    this.onChanges();
  }
  onChanges():void
  {
    this.formCompte.get('numCompte').valueChanges.subscribe(val=>
      {
        if (val) {
          this.getCompteByNumCompte(val); 
        }
        
      });
  }
  onSuccess()
  {
    console.log(this.formCompte.value);
    const depot={
      numCompte:this.formCompte.value.numCompte,
      montant:this.formCompte.value.montant

    
    };
    this.serviceCmpt.recherche(depot).subscribe( data=>
      {
        alert(JSON.stringify(data));   
      })
  }
  getCompteByNumCompte(numCompte)
  {
    this.serviceCmpt.searchByNumCompte(numCompte).subscribe(data=>
      {
       if (data['hydra:member'][0]) {
         const compte=data['hydra:member'][0];
          this.numCompte=compte['numCompte'];
          const depot=compte.depots[0];
          this.montant=depot.montant;

          this.formCompte.get('montant').enable();
       }else
       {
         
       }
       error => {
        console.log(error);
        console.log()
       }
      })
  }
}
