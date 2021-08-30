import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTE_DEVISE_URL } from '@app/shared/constante/constante_devise_url';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  constructor(private http: HttpClient) { }

  getListDeviseWithFiltre(deviseForm){

    return this.http.post(`${CONSTANTE_DEVISE_URL.URL_DEVISE_DATA}`,deviseForm) ;
  }
  
  getListDevise(){
    return this.http.get(`${CONSTANTE_DEVISE_URL.URL_DEVISE}`) ; 
  }

  getDeviseByCode(code : string){
    return this.http.get(`${CONSTANTE_DEVISE_URL.URL_DEVISE}`+code) ; 
  }
}
