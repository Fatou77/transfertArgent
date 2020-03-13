import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    private http:HttpClient
  ) { }
  getRole()
  {
    return this.http.get(`${environment.apiUrl}/api/roles.json`)
  }
  getRoleUserConnect()
  {
    return this.http.get<any>(`${environment.apiUrl}/api/show_user`);
  }
}
