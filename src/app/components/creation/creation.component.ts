import { Router } from '@angular/router';
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
  public loading = false;
  recerv;
  ninea;
  rc;
  username;
  password;
  prenom;
  nom;
  montant;
  constructor(
    private serviceCompte:CompteService,
    private route:Router ) { }

  ngOnInit() {
    this.recerv=0;
    this.formCompte = new FormGroup({
      
        ninea:new FormControl(''),
        rc:new FormControl(''),
              username:new FormControl(''),
              password:new FormControl(''),
              prenom:new FormControl(''),
              nom:new FormControl(''),
             montant:new FormControl('') 
    });
    this.onChange();
  }
    onChange(): void
  {
    this.formCompte.get('ninea').valueChanges.subscribe(val=>{
      if(val){
        this.getPatnerByNinea(val);
      }
     console.log('ninea value changed');
    });
  }                                                                                                                                                                                                                                                                                                                                       
   get f()
   {
    return this.formCompte.controls;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  }
  onSubmit()
  {
     
      const   ninea=this.formCompte.value.ninea;
      const  rc=this.formCompte.value.rc;
      const  username=this.formCompte.value.username;
      const  password=this.formCompte.value.password;
      const  prenom=this.formCompte.value.prenom;
       const nom=this.formCompte.value.nom;
       const montant=this.formCompte.value.montant;

      const nouveauP={
         rc:rc,
        ninea:ninea,
        username:username,
         password:password,
        prenom:prenom,
        nom:nom,
        montant:montant,
      } 
     
     const comptePE = {
      ninea:ninea,
        montant:montant
     };

     if (this.recerv !== 1)
      {
        this.loading = true;
      this.serviceCompte.create(nouveauP).subscribe(
        data => {
         console.log(data);
         alert(JSON.stringify(data));
         
        },
        error=>{
         console.log(error);
        },
        
        );
      }else{
        this.loading = false;
      this.serviceCompte.createExsiste(comptePE).subscribe(
        data => {
          alert(JSON.stringify(data));
          console.log(data);
        
         
        }
        );    
      }      

  }
   getPatnerByNinea(ninea) {
    this.serviceCompte.searchByNinea(ninea).subscribe
    (data => {
      if (data['hydra:member'][0]) {
        const partenaire = data['hydra:member'][0] ;
        this.ninea = partenaire['ninea'];
        console.log(data['hydra:member'][0]);
        const user=partenaire.users[0];
        this.username = user.username;
        this.password = user.password;
        this.prenom = user.prenom;
        this.nom = user.nom;
        this.rc = partenaire.rc;
        
       this.formCompte.get('username').disable();
        this.formCompte.get('password').disable();
        this.formCompte.get('prenom').disable();
        this.formCompte.get('nom').disable();
        this.formCompte.get('rc').disable();
       
      this.recerv = 1;

      } else {
        this.nom = '';
        this.prenom = '';
        this.username = '';
        this.password = '';
        this.ninea = '';
        this.rc = '';
       this.formCompte.get('username').enable();
       this.formCompte.get('password').enable();
       this.formCompte.get('prenom').enable();
       this.formCompte.get('nom').enable();
       this.formCompte.get('rc').enable();
      }
    },
    error => {
      console.log(error);
      console.log();
    });
      }
    }
  

