import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTE_OBJET_SAISI_URL } from '@app/shared/constante/constante_objet_saisi_url';
import { VobjetSaisi } from '@app/shared/entites/objetSaisi/VobjetSaisi';

@Injectable({
  providedIn: 'root'
})
export class ObjetsaisiService {

  affmodifObjetSaisi:boolean = false ; 

  constructor(private http: HttpClient) { }

  getListObjetSaisiWhitoutFilte() {
    return this.http.get(`${CONSTANTE_OBJET_SAISI_URL.URL_OBJET_SAISI}`) ; 
  }  
  getListObjetSaisiById(id:any){
    return this.http.get(`${CONSTANTE_OBJET_SAISI_URL.URL_OBJET_SAISI}`+ id) ; 
  }
  
  getListObjetSaisiwithFiltre(idDossier:any,objetSaisiForm:any){
    debugger ; 
   
    return this.http.post(`${CONSTANTE_OBJET_SAISI_URL.URL_OBJET_SAISI_DATA}`+'/'+ idDossier ,objetSaisiForm) ;
    //return this.http.post("http://localhost:8099/app/objetSaisi/data/"+ idDossier ,objetSaisiForm) ;
    
  }

  addObjetSaisi(objetSaisiForm:any){
  return this.http.post(`${CONSTANTE_OBJET_SAISI_URL.URL_OBJET_SAISI}`,objetSaisiForm ) ; 
  }

  updateObjetSaisi(objetSaisiForm:any){
    return this.http.put(`${CONSTANTE_OBJET_SAISI_URL.URL_OBJET_SAISI}`,objetSaisiForm ) ; 
  }

  deleteObjetSaisi(id:any){
    return this.http.delete(`${CONSTANTE_OBJET_SAISI_URL.URL_OBJET_SAISI}`+ id) ;
  }


}
