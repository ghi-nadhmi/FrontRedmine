import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTE_NOMENCLATURE_URL } from '@app/shared';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmUtilisateurService {
  public idUtilisateur : number ;
  constructor(private http: HttpClient) { }

  public getListUtilisateur(searchObject: Object): Observable<Object> {


    return this.http.post("http://localhost:8060/nomenclature/adm/profile/dataUtilisateurs", searchObject);
  
  
  }

  public getListPersonnel() {


    return this.http.get(CONSTANTE_NOMENCLATURE_URL.LIST_PERSONNEL);
  
  
  }





}