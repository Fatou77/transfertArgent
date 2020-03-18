import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }
  insertion(data: any)
  {
     return this.http.post(`${environment.apiUrl}/api/users`,data);
  }
  getUser()
  {
    return this.http.get<any>(`${environment.apiUrl}/api/liste/users`);
  }
  getStatus(id:number)
  {
    return this.http.get<any>(`${environment.apiUrl}/api/users/status/${id}`);
  }
  creerUserPartenaire(data:any)
  {
    return this.http.post<any>(`${environment.apiUrl}/api/user/partenaire`,data);
  }

}
