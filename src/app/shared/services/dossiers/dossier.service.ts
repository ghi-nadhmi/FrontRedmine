import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTE } from '@app/shared/constante';
import { CONSTANTE_DOSSIER_URL } from '@app/shared/constante/constante_dossier_url';
import { dossier } from '@app/shared/entites/dossier/dossier';
import { dossierInfos } from '@app/shared/entites/dossier/dossierInfos';
import { VcourrierArrivee } from '@app/shared/entites/dossier/VcourrierArrivee';
import { Vdossier } from '@app/shared/entites/dossier/vdossier';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DossierService {
 
  public emitDossier  =new BehaviorSubject<Vdossier>(null);;

  public emitDevise  =new BehaviorSubject<any>(null);;
  constructor(private http: HttpClient) { }
dossier : Vdossier ;
vconsignationCourrierarriver : VcourrierArrivee ;
  public getListDossiers() {
    return this.http.get(`${CONSTANTE_DOSSIER_URL.URL_DOSSIER_LIST}`);
 
 }

setDossier(doss : Vdossier)
{
this.dossier = doss ;
}
getDossier ()
{return this.dossier}
 getListVdossier()
 {
  return this.http.get(CONSTANTE_DOSSIER_URL.URL_DOSSIER_LIST);  
 }
 public ListDossiersWithSearch(SearchDossier){
 
  return this.http.post(CONSTANTE_DOSSIER_URL.URL_DOSSIER_LIST_SEARCH,SearchDossier);
}
public saveDossier(iddossier :number ,doss : dossier){
 
  return this.http.put(CONSTANTE_DOSSIER_URL.URL_SAVE_DOSSIER +iddossier,doss);
}

public ListEtatDossier( ){
 
 return this.http.get(CONSTANTE_DOSSIER_URL.URL_ETAT_DOSSIER_LIST);
}

public getListEvenement(SearchDossier ){
   
 return this.http.post(CONSTANTE_DOSSIER_URL.URL_LIST_EVENEMENT,SearchDossier);
}
public getListConsignationCourrier(SearchDossier , idJurid ,idEntite ){
 
 /* let params = new HttpParams()
 .set('idJurid', idJurid)
   .set('idEntite', idEntite);*/
 
if(idEntite != null)
  return this.http.post(CONSTANTE_DOSSIER_URL.URL_LIST_CONSIGNATION_COURRIER+  '?idJurid=' + idJurid + '&idEntite=' + idEntite,SearchDossier);
else 
return this.http.post(CONSTANTE_DOSSIER_URL.URL_LIST_CONSIGNATION_COURRIER +  '?idJurid=' + idJurid,SearchDossier);
}
 public ListSourceCourrierDossier( ){
 
  return this.http.get(CONSTANTE_DOSSIER_URL.URL_LIST_CONSIGNATION_COURRIER_SOURCE_SEARCH);
 }

 public ListTypeAffaireParent(idCourrier : number){
 
  return this.http.get(CONSTANTE_DOSSIER_URL.URL_LIST_CONSIGNATION_COURRIER_SOURCE_TYPE_AFFAIRE_PARENT +'/'+ idCourrier);
 }
 public ListTypeAffaireFils(idParent : number ){
 
  return this.http.get(CONSTANTE_DOSSIER_URL.URL_LIST_CONSIGNATION_COURRIER_SOURCE_TYPE_AFFAIRE_FILS +'/'+idParent);
 }
 public ListListDossierConsignation( idJurid  : number  , idTypeCourrier : number){
 
  return this.http.get(CONSTANTE_DOSSIER_URL.URL_LIST_DOSSIER + '?idJurid=' + idJurid + '&idTypeCourrier='+idTypeCourrier   );
 }

 public saveAffactationNumDoss( idDoss  : number  ){
 
  return this.http.get(CONSTANTE_DOSSIER_URL.URL_SAVE_AFFECTATION_NUM_DOSS + idDoss );
 }


 public finVDossierByID( idDoss  : number  ){
 
  return this.http.get(CONSTANTE_DOSSIER_URL.URL_FIND_VDOSSIER_BY_ID + idDoss );
 }
 public finCreationAffaire( idDoss  : number  ){
 
  return this.http.get(CONSTANTE_DOSSIER_URL.URL_FIN_CREATION_AFFAIRE + idDoss );
 }

  public saveConsignationCourrier (idCourrier , codeEtatCourrier ,objet  , idTypeAffaire ,numDossier , idMotif, vaffectationPersonnel)
 { 
   
 
  let url = CONSTANTE_DOSSIER_URL.URL_SAVE_CONSIGNATION_COURRIER +idCourrier + '?codeEtatCourrier=' + codeEtatCourrier    + '&objet=' + objet;
 
 if(codeEtatCourrier == CONSTANTE.CODE_NM_ETAT_COU_DOSS)
  {if(idTypeAffaire != null)
  url = url + '&idTypeAffaire=' + idTypeAffaire; }
  if(codeEtatCourrier == CONSTANTE.CODE_NM_ETAT_COU_REL_DOSS)
  {if(numDossier != null)
    url = url + '&numDossier=' + numDossier; }

    if(codeEtatCourrier == CONSTANTE.CODE_NM_ETAT_COU_RETOURNE)
  {if(idMotif != null)
    url = url + '&idMotif=' + idMotif;}
  
  return this.http.post(url , vaffectationPersonnel);
 }


 public getListMotifDecisionRetourCourrier(   ){
 
  return this.http.get(CONSTANTE_DOSSIER_URL.URL_LIST_MOTIF_DECISON_DOSSIER );
 }

 public getListAttribusParamByTypeAffaire(idTypAffaire :number){
 if(idTypAffaire != null)
  return this.http.get(CONSTANTE_DOSSIER_URL.URL_LIST_ATTRIBUS_TYPE_AFFAIRE + '?idTypeAffaire='+ idTypAffaire );
 else return null ;
}
 public saveDossieInfos (dossierInfos : dossierInfos)
 {
  return this.http.post(CONSTANTE_DOSSIER_URL.URL_SAVE_DOSSIER_INFOS , dossierInfos );
 }

 
 public getListAvocat(   ){
 
  return this.http.get(CONSTANTE_DOSSIER_URL.URL_LIST_AVOCAT );
 }

 
 public getListExpert(   ){
 
  return this.http.get(CONSTANTE_DOSSIER_URL.URL_LIST_EXPERT );
 }
 public getListJurid(   ){
 
  return this.http.get(CONSTANTE_DOSSIER_URL.URL_LIST_JURID );
 }
 public getListHuissier(){
 
  return this.http.get(CONSTANTE_DOSSIER_URL.URL_LIST_Huissier );
 }
 public getListAllTypeAffaire(){
 
  return this.http.get(CONSTANTE_DOSSIER_URL.URL_LIST_ALL_TYPE_AFFAIRE );
 }

 public getListAllNummDoss(idJurid : number){
 
  return this.http.get(CONSTANTE_DOSSIER_URL.URL_LIST_ALL_NUM_DOSS +'?idJurid=' + idJurid);
 }
/*
 sendVdossier(dossier: Vdossier) {
  this.subject.next(dossier);
}


*/
public getDossiersubject (): Observable<Vdossier> {
 
  console.log("recuperation  dossier")

  console.log("recuperation  dossier" , this.emitDossier.asObservable())
  if(this.emitDossier.asObservable())
 return     this.emitDossier.asObservable();
  
}
public getDevisesubject (): Observable<any> {
 
  console.log("recuperation  dev")

  console.log("recuperation  dev" , this.emitDevise.asObservable())
  if(this.emitDevise.asObservable())
 return     this.emitDevise.asObservable();
  
}
clearDossier() {
  //this.emitDossier.next();
}
// public emmitedDossier$ =  this.emitDossier.asObservable();
public emitDossierChange(change: any) {
 
  console.log("renvoie dossier")

 
  this.emitDossier.next(change);
 // 
 
}

public emitDevChange(change: any) {
 
  console.log("renvoie dev")

 
  this.emitDevise.next(change);
 // 
 
}

getListDossierParam(id : number)
{
  return this.http.get(CONSTANTE_DOSSIER_URL.URL_DOSSIER_PARAM + id );
}

completeEmitDossier()
{
  this.emitDossier.complete();
}
 

public findDossByID(id : number){
 
  return this.http.get(CONSTANTE_DOSSIER_URL.url_find_doss_by_id  + id);
 }

 public listDevise ()
 {  
   return this.http.get(CONSTANTE_DOSSIER_URL.url_list_devise )}

   getListTypCourrier()
   {
    return this.http.get(CONSTANTE_DOSSIER_URL.url_list_typ_courrier  );
   }

   findDeviseByID(id : number)
   {
    return this.http.get(CONSTANTE_DOSSIER_URL.url_find_devise_by_id + id  );
   }
}
