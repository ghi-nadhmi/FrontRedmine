import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTE_NOMENCLATURE_URL } from '@app/shared/constante';

@Injectable({
  providedIn: 'root'
})
export class JuridService {

  constructor(private http: HttpClient) { }

  getlistJurdiction(){
    return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.URL_JURDI}`)
  }

}
