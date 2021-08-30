import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CONSTANTE_NOMENCLATURE_URL } from '@app/shared/constante/constante_nomenclature_url';

@Injectable({
  providedIn: 'root'
})
export class NatureTiersService {

  constructor(private http: HttpClient) { 

        

  }

  public getListNatureTiers(): Observable<Object> {
    return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.URL_NATURE_TIERS}`);
}

public getListNatureTiersById(id:any): Observable<Object> {
  return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.URL_NATURE_TIERS}`+id);
}

}

