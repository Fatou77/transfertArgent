import { Router } from '@angular/router';
import { RoleService } from './../../services/role.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CompteService } from './../../services/compte.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent implements OnInit {
 
  formCompte:FormGroup;
  roles;
  constructor(
    private serviceCompte:CompteService,
    private route:Router
  ) { }

  ngOnInit() {
    
    this.formCompte = new FormGroup({
      partenaire:new FormGroup({
        ninea:new FormControl(''),
      rc:new FormControl(''),
       userPartenaire:new FormGroup({
        username:new FormControl(''),
      password:new FormControl(''),
      prenom:new FormControl(''),
      nom:new FormControl('')
     
       })
    }),
    depot:new FormGroup({
      montant:new FormControl('')
    })
    
      
    });
    this.onChange();  
  }
  onChange():void
  {
    this.formCompte.get('partenaire.ninea').valueChanges.subscribe(val=>{
      console.log(val);
     
    });
  }                                                                                                                                                                                                                                                                                                                                       
  get f(){
    return this.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

  onSubmit()
  {
    console.log(this.formCompte.value);
    const partenaire={
      ninea:this.formCompte.value.ninea,
      rc:this.formCompte.value.rc,
      username:this.formCompte.value.username,
      password:this.formCompte.value.password,
      prenom:this.formCompte.value.prenom,
      nom:this.formCompte.value.nom,
      montant:this.formCompte.value.montant,
         };
   
    this.serviceCompte.create(partenaire).subscribe( data=>
      {
        alert(JSON.stringify(data));   
      })
  }

}
