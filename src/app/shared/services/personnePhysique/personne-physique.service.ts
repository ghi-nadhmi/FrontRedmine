import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CONSTANTE_PERSONNE } from '@app/shared/constante/constante_pp_pm';

@Injectable({
  providedIn: 'root'
})
export class PersonnePhysiqueService {

  constructor(private http: HttpClient) {
  }

  public savePersonnePhysique(personnePhysique:any): Observable<Object> {
      return this.http.post(`${CONSTANTE_PERSONNE.URL_PP}`,personnePhysique);
  }

  public updatePersonnePhysique(personnePhysique:any): Observable<Object> {
    return this.http.post(`${CONSTANTE_PERSONNE.URL_PP_UPDATE}`,personnePhysique);
}


  public getPersonnePhysiqueById(id:number): Observable<Object> {
    return this.http.get(`${CONSTANTE_PERSONNE.URL_PP}`+id);
}

public getSituationPersonneByIdPersonne(idPersonne:any): Observable<Object> {
  return this.http.get(`${CONSTANTE_PERSONNE.URL_SP_ByIdPersonne}`+idPersonne);
}

public getPersonnePhysiqueByNumPiece(numPiece:any): Observable<Object> {
  return this.http.get(`${CONSTANTE_PERSONNE.URL_PP_BYNumPiece}`+numPiece);
}

public getPersonnePhysiqueByIdForMorale(id:any): Observable<Object> {
  return this.http.get(`${CONSTANTE_PERSONNE.URL_PP_MORALE}`+id);
}
}
