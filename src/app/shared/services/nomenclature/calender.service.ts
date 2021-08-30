import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTE_NOMENCLATURE_URL } from '@app/shared/constante';
@Injectable({
  providedIn: 'root'
})
export class CalenderService {

  constructor(private http: HttpClient) { }


  public getListevent() {
    return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.URL_LIST_EVENTS}`);
 
 }
}
