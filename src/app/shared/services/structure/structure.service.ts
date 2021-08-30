import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTE_STRUCTURE_URL } from '@app/shared/constante/constante_structure_url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StructureService {
  constructor(private http: HttpClient) { }


  public getListStructureByNmTypeActe(idNmTypeActe:any): Observable<Object> {
    return this.http.get(`${CONSTANTE_STRUCTURE_URL.URL_STRUCTURE_NM_TYPE_ACTE}`+idNmTypeActe);
  }

  public getListStructurePp(searchObject: Object): Observable<Object> {
    return this.http.post(`${CONSTANTE_STRUCTURE_URL.URL_STRUCTURE_Pp}`, searchObject);
  }

  

}



