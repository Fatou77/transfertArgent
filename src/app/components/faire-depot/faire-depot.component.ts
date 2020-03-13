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

  constructor(
    private serviceCmpt:CompteService
  ) { }

  ngOnInit() {
    this.formCompte = new FormGroup({
      numCompte:new FormControl(''),
      montant:new FormControl(''),
    })
  }

  onSuccess()
  {
    console.log(this.formCompte.value);
    const depot={
      numCompte:this.formCompte.value.numCompte,
    
    };
    this.serviceCmpt.recherche(depot).subscribe( data=>
      {
        alert(JSON.stringify(data));   
      })
  }
}
