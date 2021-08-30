import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTE_DECISION_URL } from '@app/shared/constante/constante_decision_url';

@Injectable({
  providedIn: 'root'
})
export class DecisionDossierService {

  constructor(private http: HttpClient) { }

  getListDecisiondosFiltre(idDossier,idNmJurid,decisionForm){
  return this.http.post(`${CONSTANTE_DECISION_URL.URL_DECISION_DOSSIER_DATA}`+'/'+ idDossier +'/'+idNmJurid ,decisionForm) ; 
  }
  getListEntite(entiteform){
    return this.http.post(`${CONSTANTE_DECISION_URL.URL_ENTITE}` ,entiteform)
  }
  getListdecision(id,decisionform){
    debugger ; 
    return this.http.post(`${CONSTANTE_DECISION_URL.URL_DECISION}`+'/'+id ,decisionform)
  }
  getListAdmUtilisateurs(admUtilisateurForm){
    return this.http.post(`${CONSTANTE_DECISION_URL.URL_LIST_UTILISATEUR}`,admUtilisateurForm) 
  }
  getListMotifDec(id,motifDecForm){
    return this.http.post(`${CONSTANTE_DECISION_URL.URL_LIST_MOTIF_DEC}`+'/'+id,motifDecForm) ;
  }
}
