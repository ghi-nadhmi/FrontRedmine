import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { COURRIER_ARRIVES_URL } from '@app/shared/constante/constante_ca';
import { COURRIER_DEPART_URL } from '@app/shared/constante/constante_cd';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoCdService {

  constructor(private http: HttpClient) { }
  public getCourrierDepartViewById(idCourrier: any) {
    return this.http.get(`${COURRIER_DEPART_URL.GET_COURRIER_DEPART_VIEW}` + '/' + idCourrier + '');
  }
  public getListCourrierArrive(searchObject: Object, idNmJurid: number): Observable<Object> {
    return this.http.post(`${COURRIER_DEPART_URL.COURRIER_DEPART}` + '/' + idNmJurid + '', searchObject);
  }

  public saveCourrierArrive(saveObject: Object): Observable<Object> {
    return this.http.post(`${COURRIER_DEPART_URL.SAVE_COURRIER_ARRIVES}`, saveObject);
  }


  public editCourrierArrive(saveObject: Object): Observable<Object> {
    return this.http.post(`${COURRIER_DEPART_URL.SAVE_COURRIER_ARRIVES}`, saveObject);
  }

  public getTypeCourrier(idTypJurid: any) {
    return this.http.get(`${COURRIER_DEPART_URL.NATURE_COURRIER}` + '/' + idTypJurid + '');
  }

  public getDestinataire(idTypJurid: any, idNmNatCo: any) {
    return this.http.get(`${COURRIER_DEPART_URL.DESTINATAIRE}` + '/?idTypJurid=' + idTypJurid + (idNmNatCo !== null ? '&idNmNatCo=' + idNmNatCo : ""));
  }
  public getTypeCorrespondance(idTypJurid: any, idNmNatCo: any, idNmDestCour: any) {
    return this.http.get(`${COURRIER_DEPART_URL.CORRESPONDANCE}` + '?idTypJurid=' + idTypJurid + '&idNmNatCo=' + idNmNatCo + '&idNmDestCour=' + idNmDestCour);
  }

  public getTypeCourrierChild(idTypJurid: any, idNmNatCo: any, idNmDestCour: any, idNmTypCorrCourr: any) {
    return this.http.get(`${COURRIER_DEPART_URL.NATURE_COURRIER_CHILD}` + '?idTypJurid=' + idTypJurid + '&idNmNatCo=' + idNmNatCo + '&idNmDestCour=' + idNmDestCour + '&idNmTypCorrCourr=' + idNmTypCorrCourr);
  }

  public getDestinataireChild(idTypJurid: any, idNmNatCo: any, idNmDestCour: any, idNmTypCorrCourr: any, idNmTypCourr: any) {
    return this.http.get(`${COURRIER_DEPART_URL.DESTINATAIRE_CHILD}` + '?idTypJurid=' + idTypJurid + '&idNmNatCo=' + idNmNatCo + '&idNmDestCour=' + idNmDestCour + '&idNmTypCorrCourr=' + idNmTypCorrCourr + '&idNmTypCourr=' + idNmTypCourr);
  }
  public getListEtatCourrier(): Observable<Object> {
    return this.http.post(`${COURRIER_DEPART_URL.ETAT_COURRIER}`, {});
  }


  public getListSubCorrespondance(id: any) {
    return this.http.get(`${COURRIER_DEPART_URL.LIST_SUB_CORRESPONDANCE}` + '/' + id + '');
  }

  public addCourrierArrive(object: Object): Observable<Object> {
    return this.http.post(`${COURRIER_DEPART_URL.ADD_COURRIER_ARRIVEE}`, object);
  }

  public deleteCourrierById(id: any) {
    return this.http.delete(`${COURRIER_DEPART_URL.DELETE_COURRIER_ARRIVES}` + id + '');
  }

  public getCourrierById(id: any) {
    return this.http.get(`${COURRIER_DEPART_URL.GET_COURRIER_DEPART_ID}` + id + '');
  }
  public getTypeCorrespondanceByParent(idTypJurid: any, idNmNatCo: any, idNmDestCour: any, idParent: any) {
    return this.http.get(`${COURRIER_DEPART_URL.GET_CORRESPONDANCE_PARENT_ID}` + '?idTypJurid=' + idTypJurid + '&idNmNatCo=' + idNmNatCo + '&idNmDestCour=' + idNmDestCour + '&idParent=' + idParent);
  }

  public getChildTypeCourriereByParent(idTypJurid: any, idNmNatCo: any, idNmDestCour: any, idNmTypCorrCourr: any, idParent: any) {
    return this.http.get(`${COURRIER_DEPART_URL.GET_CHILD_TYPE_COURRIER_ARRIVES_PARENT_ID}` + '?idTypJurid=' + idTypJurid + '&idNmNatCo=' + idNmNatCo + '&idNmDestCour=' + idNmDestCour + '&idNmTypCorrCourr=' + idNmTypCorrCourr + '&idParent=' + idParent);
  }

  public sendCourrier(idCourrier: any): Observable<Object> {
    return this.http.post(`${COURRIER_DEPART_URL.SEND_COURRIER_ARRIVE_BY_ID}` + idCourrier, {});
  }

  public getJurid(): Observable<Object> {
    return this.http.get(`${COURRIER_DEPART_URL.GET_JURID}`);
  }

  public getJuridData(idTypeJurid: any, idJurid: any): Observable<Object> {
    return this.http.get(`${COURRIER_DEPART_URL.GET_JURID_DATA}` + '?idTypeJurid=' + idTypeJurid + '&idJurid=' + idJurid);
  }

  public getListCourrierDistribution(idTypeJurid: any, searchObject: Object): Observable<Object> {
    return this.http.post(`${COURRIER_DEPART_URL.LIST_COURRIER_DISTRIBUTION}` + '/' + idTypeJurid + '', searchObject);
  }

  public distributionCourrier(listVCourrier: Object): Observable<Object> {
    return this.http.post(`${COURRIER_DEPART_URL.SEND_COURRIER_TO_ENTITE}`, listVCourrier);
  }

  public getListCourrierReception(idJurid: any, idEntite: any, searchObject: Object): Observable<Object> {
    return this.http.post(`${COURRIER_DEPART_URL.LIST_COURRIER_RECEPTION}` + '?idJurid=' + idJurid + (idEntite !== null ? '&idEntite=' + idEntite : ''), searchObject);
  }

  public receptionCourrier(listVCourrier: Object): Observable<Object> {
    return this.http.post(`${COURRIER_DEPART_URL.RECEPTION_COURRIER}`, listVCourrier);
  }

  //Search combox
  public getListComboxSourceByIdJurid(idJurid: number): Observable<Object> {
    return this.http.get(`${COURRIER_DEPART_URL.LIST_SEARCH_SOURCE}` + '/' + idJurid + '');
  }

  public getListComboxSourceChildByIdSrcIdJurid(idSrc: number, idJurid: number): Observable<Object> {
    return this.http.get(`${COURRIER_DEPART_URL.LIST_SEARCH_SOURCE_CHILD}` + '?idSrc=' + idSrc + ' &idJurid=' + idJurid);
  }

  public getListAvocatName(idTypeCorr: number, idSrc: number): Observable<Object> {
    return this.http.get(`${COURRIER_DEPART_URL.LIST_AVOCAT}` + '?idTypeCorr=' + idTypeCorr + '&idSrc=' + idSrc);
  }

  public getListEntiteByIdTypeJurid(idTypeJurid: number): Observable<Object> {
    return this.http.get(`${COURRIER_DEPART_URL.LIST_ENTITE}` + '/' +idTypeJurid+'');
  }
}
