import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTE_TIERS } from '@app/shared/constante/constante_tiers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiersService {

  constructor(private http: HttpClient) { 


  }

  // public getListTiersByIdDossier(idDossier:any): Observable<Object> {
  //   return this.http.get(`${CONSTANTE_TIERS.URL_TIERS_by_idDossier}`+idDossier);
  // }

  public getListTiersByIdDossier(searchObject:Object): Observable<Object> {
    return this.http.post(`${CONSTANTE_TIERS.URL_TIERS_by_idDossier}`,searchObject);
  }

  public getListTiers(searchObject:Object): Observable<Object> {
    return this.http.post(`${CONSTANTE_TIERS.URL_TIERS}`,searchObject);
  }


  public saveOrUpdateTiers(tier:any): Observable<Object> {
    return this.http.post(`${CONSTANTE_TIERS.URL_TIERS_saveOrUpdate}`,tier);
  }

  public deleteTiers(id:any): Observable<Object> {
    return this.http.delete(`${CONSTANTE_TIERS.UTL_TIERS_DELETE}`+id);
  }

  public isUniquePersonne(idDossier:any,idPersonne): Observable<Object> {
    return this.http.get(`${CONSTANTE_TIERS.UTL_TIERS_UNIQUE_PERSONNE}`+idDossier+"/"+idPersonne);
  }
}
