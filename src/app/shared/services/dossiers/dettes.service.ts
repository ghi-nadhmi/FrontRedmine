import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTE_DOSSIER_URL } from '@app/shared/constante/constante_dossier_url';
import { SearchObject } from '@app/shared/entites';
import { Dettes } from '@app/shared/entites/dossier/Dettes';

@Injectable({
  providedIn: 'root'
})
export class DettesService {

  constructor(private http: HttpClient) { }

  public listDettesByIdDossier(idDossier :number ){
 
    return this.http.get(CONSTANTE_DOSSIER_URL.URL_LIST_DETTES_BY_ID_DOSSIER + '?idDossier=' +idDossier );
   }

   public getListNmTypDocument(  ){
 
    return this.http.get(CONSTANTE_DOSSIER_URL.URL_LIST_Typ_Document  );
   }
   
   public saveDettes(  dettes : Dettes){
 
    return this.http.post(CONSTANTE_DOSSIER_URL.URL_SAVE_DETTES  , dettes );
   }
   public getListDocuments(  ){
 
    return this.http.get(CONSTANTE_DOSSIER_URL.URL_DOC_NOT_FILTRE  );
   }

   public listDettesWithFilter(  searchobject : SearchObject){
 
    return this.http.post(CONSTANTE_DOSSIER_URL.URL_LIST_DETTES_BY_ID_DOSSIER_WITH_FILTER  , searchobject );
   }
   public deleteDettes( id : number ){
 
    return this.http.delete(CONSTANTE_DOSSIER_URL.URL_DELEE_DETTES + id  );
   }
   public updateDettes( dettes : Dettes ){
 
    return this.http.put(CONSTANTE_DOSSIER_URL.URL_update_DETTES , dettes  );
   }
   public findDettesByID(  id : number ){
 
    return this.http.get(CONSTANTE_DOSSIER_URL.URL_FIND_DETTES_BY_ID + id  );
   }

}
