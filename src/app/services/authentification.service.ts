import { Role } from './../modeles/role';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { User } from '../modeles/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private currentUserSubject: BehaviorSubject<User>;


  constructor(private httpClient:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

   }
   public get currentUserValue(): User {
    return this.currentUserSubject.value;
}
  getConnexion(user:User)
  {
     return this.httpClient.post<User>(`${environment.apiUrl}/login_check`,user)
     .pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
  }));
  }
  getRoles()
  {
    return this.httpClient.get<Role>(`${environment.apiUrl}/api/roles`);
  }

}
