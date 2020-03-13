import { AuthentificationService } from './../../services/authentification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
   roles;
  constructor( private auth: AuthentificationService) { }

  ngOnInit() {
  }
  onRoles(){
       this.auth.getRoles().subscribe(
         data=>{this.roles=data["hydra:member"].libellel
          console.log(data["hydra:member"])
         }
       )
  }

}
