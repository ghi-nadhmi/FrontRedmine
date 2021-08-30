import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTE_NOMENCLATURE_URL } from '@app/shared/constante';
import { VEntite } from '@app/shared/entites/nomenclature/VEntite';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntitesService {
  
public clickedDate : Date ;
public title:string;
  public affmodif :boolean = false ; 
  selectEntiteSubject = new Subject<VEntite>();
  constructor(private http: HttpClient) { }

  public selectEntite(entite :VEntite){
    this.selectEntiteSubject.next(entite) ;
   }
  
  public getListEntite() {
   return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.URL_ENTITES}`);

}

  public addEntite(formEntite:any){
    debugger ; 
    return this.http.post(`${CONSTANTE_NOMENCLATURE_URL.URL_ENTITES}`,formEntite) ;
  }

  public updateEntite(formEntite:any){

    debugger
    return this.http.put(`${CONSTANTE_NOMENCLATURE_URL.URL_ENTITES}`,formEntite) ;
  }

  public getEntiteById(idEntite){
    return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.URL_ENTITES}`+ idEntite) ; 
  }

  public deleteEntite(idEntite) {
    return this.http.delete(`${CONSTANTE_NOMENCLATURE_URL.URL_ENTITES}`+ idEntite) ;
  }

  public ListEntitesWithSearch(SearchEntite){
   
    return this.http.post(`${CONSTANTE_NOMENCLATURE_URL.URL_ENTITES_LIST}`,SearchEntite);
  }

  public getListEntiteForCombo(idJurid:any) {
    return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.URL_ENTITY_LIST_COMBO}`+idJurid);
 }

}
