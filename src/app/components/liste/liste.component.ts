import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
  users:any;

  constructor(
    private user:UserService
  ) { }

  ngOnInit() {
    this.user.getUser().subscribe(data=>
      {
        console.log(data)

        this.users=data;
      })
  }
  onStatus(id:number)
  {
    this.user.getStatus(id).subscribe(data=>
      {
          console.log(data);
      })
  }
 
    
}
