import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTE_NATURE_OS_URL } from '@app/shared/constante/constante_nature_os_url';

@Injectable({
  providedIn: 'root'
})
export class NatureOSService {

  constructor(private http: HttpClient) { }

  getListNatureOSWithoutFiltre(){
    return this.http.get(`${CONSTANTE_NATURE_OS_URL.URL_NATURE_OS}`) ;  
  }

  getListNatureOswithFiltre(NatureOSForm:any){
    return this.http.post(`${CONSTANTE_NATURE_OS_URL.URL_NATURE_OS_DATA}`,NatureOSForm) ;
  }

  getListNatureOsById(id:any){
    return this.http.get(`${CONSTANTE_NATURE_OS_URL.URL_NATURE_OS}`+ id) ; 
  }

  addNatureOs(NatureOSForm:any){
  return this.http.post(`${CONSTANTE_NATURE_OS_URL.URL_NATURE_OS}`,NatureOSForm ) ; 
  }

  updateNatureOs(NatureOSForm:any){
    return this.http.put(`${CONSTANTE_NATURE_OS_URL.URL_NATURE_OS}`,NatureOSForm ) ; 
  }

  deleteNatureOs(id:any){
    return this.http.delete(`${CONSTANTE_NATURE_OS_URL.URL_NATURE_OS}`+ id) ;
  }





}
