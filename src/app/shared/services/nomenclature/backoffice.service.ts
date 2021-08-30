import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONSTANTE_NOMENCLATURE_URL } from '@app/shared/constante';

@Injectable({
  providedIn: 'root'
})
export class BackofficeService {

  constructor(private http: HttpClient) { }

  getlistTypeCourrier(){
    return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.URL_TYPE_COURRIER_DATA_PARENT}`)
  }
  getlistTypeCourrierChild(id){
    return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.URL_TYPE_COURRIER_DATA_CHILD}`+id)
  }
  
}
