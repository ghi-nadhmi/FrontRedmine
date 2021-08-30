import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTE_DOCUMENT_URL } from '@app/shared/constante/constante_document_url';

@Injectable({
  providedIn: 'root'
})
export class NatureDocService {

  constructor(private http: HttpClient) { }

  getListNatureDoc(){
    return this.http.get(`${CONSTANTE_DOCUMENT_URL.URL_NATURE_DOC}`)  ; 
  }
  getListNatureDocWithFilter(natureDoc:any){
    return this.http.post(`${CONSTANTE_DOCUMENT_URL.URL_NATURE_DOC_DATA}`,natureDoc) ; 
  }
  addNatureDoc(natureDoc:any){
    return this.http.post(`${CONSTANTE_DOCUMENT_URL.URL_NATURE_DOC}`,natureDoc) ; 
  }
  upadteNatureDoc(natureDoc:any){
    return this.http.put(`${CONSTANTE_DOCUMENT_URL.URL_NATURE_DOC}`,natureDoc) ; 
  }
  getNatureDocById(id){
   return this.http.get(`${CONSTANTE_DOCUMENT_URL.URL_NATURE_DOC}` + "/" + id) ; 
  }
  deleteNatureDoc(id){
    return this.http.delete(`${CONSTANTE_DOCUMENT_URL.URL_NATURE_DOC}`+ "/" + id) ; 
  }
}
