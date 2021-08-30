import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTE_DASHBOARD_URL } from '@app/shared/constante/constante_dashboard_url';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient ) { }

  public getDahsboardCourrierAr(  idJurid : number ){
 
    return this.http.get(CONSTANTE_DASHBOARD_URL.DASHBOARD_COURRIER_AR_URL +'?idNmJurid=' +idJurid);
   }
   public getDahsboardCourrierFr( idJurid : number  ){
 
    return this.http.get(CONSTANTE_DASHBOARD_URL.DASHBOARD_COURRIER_Fr_URL +'?idNmJurid=' +idJurid );
   }
   public getDahsboardDossierAr(idJurid : number   ){
 
    return this.http.get(CONSTANTE_DASHBOARD_URL.DASHBOARD_DOSSIER_AR_URL +'?idNmJurid=' +idJurid);
   }
   public getDahsboardDossierFr( idJurid : number  ){
 
    return this.http.get(CONSTANTE_DASHBOARD_URL.DASHBOARD_DOSSIER_Fr_URL +'?idNmJurid=' +idJurid);
   }
}
