import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ACTES_URL } from '@app/shared/constante/constante_actes_url';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class OrdonnanceService {

  constructor(private http: HttpClient) { }


  public getListOrdonnance(searchObject: Object): Observable<Object> {
    return this.http.post(`${ACTES_URL.LIST_ACTES}`, searchObject);
  }


}
  