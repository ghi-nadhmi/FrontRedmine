import { environment } from "@environments/environment";
     
const url = environment.apiUrl;

export const CONSTANTE_DASHBOARD_URL= {

    DASHBOARD_COURRIER_AR_URL: `${url}/app/dashboard/getDashboardCourrierAr`,
    DASHBOARD_COURRIER_Fr_URL: `${url}/app/dashboard/getDashboardCourrierFR`,
    DASHBOARD_DOSSIER_AR_URL: `${url}/app/dashboard/getDashboardDossierrAr`,
    DASHBOARD_DOSSIER_Fr_URL: `${url}/app/dashboard/getDashboardDossierFR`,
 
};