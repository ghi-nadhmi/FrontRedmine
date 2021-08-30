import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTE_NOMENCLATURE_URL } from '@app/shared';
import { VSalle } from '@app/shared/entites/nomenclature/VSalle';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SallesService {

  public affmodifsalle: boolean = false;
  listeSalles: VSalle[];
  selectSalleSubject = new Subject<VSalle>();
  constructor(private http: HttpClient) { }

  public getListSalle() {
    return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.URL_SALLE}`);
  }

  public getListSalleWithFilter(formSalle: any) {
    return this.http.post(`${CONSTANTE_NOMENCLATURE_URL.URL_SALLE_LIST}`, formSalle);

  }
  public updateListeSalle(formSalle: any) {
    return this.http.put(`${CONSTANTE_NOMENCLATURE_URL.URL_SALLE}`, formSalle);
  }
  public getListSalleById(id) {
    return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.URL_SALLE}` + id);

  }

  public addsalle(formSalle: any) {
    return this.http.post(`${CONSTANTE_NOMENCLATURE_URL.URL_SALLE}`, formSalle);
  }
  public deleteSalle(id: any) {
    return this.http.delete(`${CONSTANTE_NOMENCLATURE_URL.URL_SALLE}` + id);
  }

  public selectSalle(salle: VSalle) {
    this.selectSalleSubject.next(salle);
  }

  public getListSalleForCombo(idJurid: any) {
    return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.URL_SALLE_LIST_COMBO}` + idJurid);
  }

}
