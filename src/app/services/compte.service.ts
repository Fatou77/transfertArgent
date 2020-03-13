import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor( private http:HttpClient) { }
  create(data:any)
  {
    return this.http.post(`${environment.apiUrl}/api/compte_partenaire`,data)
  }
  createExsiste(data:any)
  {
    return this.http.post(`${environment.apiUrl}/api/cpt_partenaire_exist`,data)
  }
  getAllPartenair()
  {
    return this.http.get<any>(`${environment.apiUrl}/api/partenaires`);
  }
  recherche(data :any)
  {
    return this.http.post(`${environment.apiUrl}/api/faire_depot`,data);
  }
}
