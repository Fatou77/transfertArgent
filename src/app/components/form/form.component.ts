import { AuthentificationService } from '../../services/authentification.service';
import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl}from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formConnexion:FormGroup;
  constructor(private auth:AuthentificationService,
    private router:Router) { }

  ngOnInit() {
    this.formConnexion=new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
 
  }
  onConnxion(){
    console.log(this.formConnexion.value);
   let user={username:this.formConnexion.value.username,
             password:this.formConnexion.value.password
    };
    this.auth.getConnexion(user).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['/accueil']);
        },
        error =>{
          console.log(error);
        }
        
      )
     }
    

}
