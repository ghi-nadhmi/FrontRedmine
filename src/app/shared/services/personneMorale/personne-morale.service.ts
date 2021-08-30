import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CONSTANTE_PERSONNE } from '@app/shared/constante/constante_pp_pm';

@Injectable({
  providedIn: 'root'
})
export class PersonneMoraleService {

  constructor(private http: HttpClient) { }

  public savePersonneMorale(personneMorale:any): Observable<Object> {
    return this.http.post(`${CONSTANTE_PERSONNE.URL_PM}`,personneMorale);
}

public getPersonneMoraleById(id:any): Observable<Object> {
  return this.http.get(`${CONSTANTE_PERSONNE.URL_PM}`+id);
}

public updatePersonneMorale(personneMorale:any): Observable<Object> {
  return this.http.post(`${CONSTANTE_PERSONNE.URL_PM_UPDATE}`,personneMorale);
}

public getPersonneMoraleByNumPiece(numPiece:any): Observable<Object> {
  return this.http.get(`${CONSTANTE_PERSONNE.URL_PM_BYNumPiece}`+numPiece);
}

}
