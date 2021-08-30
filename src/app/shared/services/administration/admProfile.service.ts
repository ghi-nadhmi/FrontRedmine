import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CONSTANTE_NOMENCLATURE_URL } from '../../constante';
import { TAdmProfile } from '@app/shared/entites/administration/TAdmProfile';
 


@Injectable({ providedIn: 'root' })
export class AdmProfileService {
 public idProfil : number ;
  constructor(private http: HttpClient) {
  }



 
 
  
 

  
    public updateProfile(profil: TAdmProfile) {
      
      return this.http.put(`${CONSTANTE_NOMENCLATURE_URL.UPDATE_PROFIL}`, profil);
    }
  





  public getListProfile(): Observable<Object> {
    return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.URL_ADM_PROFILE}`);
  }

  public saveProfil(profil: TAdmProfile) {
    debugger
    return this.http.post(`${CONSTANTE_NOMENCLATURE_URL.SAVE_PROFIL}`, profil);
  }


  public getTree() {

    return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.ADD_PROFIL_TREE}`);
  }

  public editTree(idProfil : number) {

    return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.EDIT_PROFIL_TREE}`+ idProfil);
  }

  public getListeApplications() {

    return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.LISTE_APPLICATION}`);
  }

  public getAdmFunctionsParents() {

    return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.URL_ADM_FUNCTION_PARENT}`);
  }


  public editProfil(idProfil : number) {

    return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.EDIT_PROFIL}`+ idProfil);
  }

  public updateProfil(profil: TAdmProfile) {
    
    return this.http.put(`${CONSTANTE_NOMENCLATURE_URL.UPDATE_PROFIL}`, profil);
  }

  public getListUtilisateurByIdNmJurid(idNmJurid: Number, searchObject: any ): Observable<Object>{
    return this.http.post(`${CONSTANTE_NOMENCLATURE_URL.LIST_UTILISATEUR_ID_NM_JURID}` +idNmJurid, searchObject);
  }

  public editListUtilisateurByIdNmJuridAndIdProfil(idProfil: Number ,idNmJurid: Number, searchObject: any ): Observable<Object>{
    return this.http.post(`${CONSTANTE_NOMENCLATURE_URL.EDIT_LIST_UTILISATEUR_ID_NM_JURID}`   +   '?idProfil=' + idProfil + '&idNmJurid='+idNmJurid , searchObject);
  }

  public getListProfil(searchObject: Object): Observable<Object> {
 
  
    return this.http.post( CONSTANTE_NOMENCLATURE_URL.LIST_PROFIL, searchObject);
  
  
  }
  
  public getProfil(idObject: Number) {
   
    
    return this.http.get(CONSTANTE_NOMENCLATURE_URL.EDIT_PROFIL+ idObject);
  
  
  }
  
  public deleteAdmProfilById(idObject: Number)
  {  
    return this.http.delete(CONSTANTE_NOMENCLATURE_URL.DELETE_PROFIL+ idObject);
  }
 


}
