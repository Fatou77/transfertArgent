import { CompteService } from './../../services/compte.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-partenaire',
  templateUrl: './liste-partenaire.component.html',
  styleUrls: ['./liste-partenaire.component.scss']
})
export class ListePartenaireComponent implements OnInit {
  partenaires:any;

  constructor(
    private serviceCompte:CompteService
  ) { }

  ngOnInit() {
       this.serviceCompte.getAllPartenair().subscribe(data=>
      {
        console.log(`data::${JSON.stringify(data)}`);
        this.partenaires=data["hydra:member"];
      })
  }

}
