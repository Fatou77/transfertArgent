import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { RoleService } from './../../services/role.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-insertion',
  templateUrl: './insertion.component.html',
  styleUrls: ['./insertion.component.scss']
})
export class InsertionComponent implements OnInit {
  formUser: FormGroup;
  roles:any;

  constructor(
    private roleService:RoleService,
    private userService:UserService,
    private router:Router 
  ) { }

  ngOnInit() {
    this.formUser = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      prenom: new FormControl(''),
      nom: new FormControl(''),
      role:new FormControl('')
     
    });
    this.roleService.getRoleUserConnect().subscribe(
     data=>
     {
      this.roles = data;
      console.log(this.roles);
     }
   ) 
  }
  onSubmit()
  {
  
    console.log(this.formUser.value);
    const user={
      username:this.formUser.value.username,
      password:this.formUser.value.password,
      prenom:this.formUser.value.prenom,
     nom:this.formUser.value.nom,
     role: `api/roles/${this.formUser.value.role}`
    } 
    this.userService.insertion(user).subscribe( data=>
      {
        alert(JSON.stringify(data));
       this.router.navigate(['/liste']);   
      })
  }

}
