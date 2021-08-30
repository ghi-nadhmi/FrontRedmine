import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ACTES_URL } from '@app/shared/constante/constante_actes_url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActesService {

  constructor(private http: HttpClient) { }


  public getListActes(searchObject: Object): Observable<Object> {
    return this.http.post(`${ACTES_URL.LIST_ACTES}`, searchObject);
  }


  

  public saveActe(saveObject: Object): Observable<Object> {
    return this.http.post(`${ACTES_URL.SAVE_ACTE}`, saveObject);
  }


  public onSaveFinale(saveObject: Object): Observable<Object> {
    return this.http.put(`${ACTES_URL.SAVE_ACTE}`, saveObject);
  }

  public getActes(idActe: Object) {
    return this.http.get(`${ACTES_URL.EDIT_ACTE}`+  '/' + idActe + '');
  }




  public getListNmTypeActe(searchObject: Object): Observable<Object> {
    return this.http.post(`${ACTES_URL.LIST_NM_TYPE_ACTE}`, searchObject);
  }


public getNmTypeActe(id: any): Observable<Object> {
    return this.http.get(`${ACTES_URL.NM_TYPE_ACTE}` +  '/' +  id);
}

public getNmTypeActeByCode(code: any): Observable<Object> {
  return this.http.get(`${ACTES_URL.NM_TYPE_ACTE}` +  '/code/' +  code);
}



public getListDecisionForActe(idNmTypeActe: any) : Observable<Object> {
  return this.http.get(`${ACTES_URL.LIST_DECISIONS_ACTES}`+  '/' + idNmTypeActe);


}

public getNmDecision(idDecision: String) {
  return this.http.get(`${ACTES_URL.NMDECISION}`+  '/' + idDecision + '');
}


public getDecisionActe(searchObject: Object) : Observable<Object> {
  return this.http.post(`${ACTES_URL.DECISIONS_ACTES_ID_ACTES}`, searchObject);


}



}
