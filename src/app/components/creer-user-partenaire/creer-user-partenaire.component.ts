import { Router } from '@angular/router';
import { RoleService } from './../../services/role.service';
import { UserService } from './../../services/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creer-user-partenaire',
  templateUrl: './creer-user-partenaire.component.html',
  styleUrls: ['./creer-user-partenaire.component.scss']
})
export class CreerUserPartenaireComponent implements OnInit {
  formUser:FormGroup;
  roles;


  constructor(
    private userService:UserService,
    private serviceRole:RoleService,
    private router:Router
  ) { }

  ngOnInit() {
    this.formUser=new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
        prenom: new FormControl(''),
        nom: new FormControl(''),
        role:new FormControl('')
    });
    this.serviceRole.getRoleUserConnect().subscribe(data=>{
      this.roles=data;
      console.log(this.roles);
    })
  }
  onSubmit()
  {
    console.log(this.formUser.value);
    const userp={
      username:this.formUser.value.username,
      password:this.formUser.value.password,
      prenom:this.formUser.value.prenom,
      nom:this.formUser.value.nom,
      role: `api/roles/${this.formUser.value.role}`
    };
    this.userService.creerUserPartenaire(userp).subscribe(data=>
      {
        console.log(data);
      alert(JSON.stringify(data));
      this.router.navigate(['/liste']);
    })

  }
}
