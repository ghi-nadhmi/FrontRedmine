import { environment } from '@environments/environment';
const url = environment.apiUrl;

export const CONSTANTE_DECISION_URL = {

    URL_DECISION_DOSSIER: `${url}/app/decisionDossier/`,
    URL_DECISION_DOSSIER_DATA : `${url}/app/decisionDossier/data`,
    URL_ENTITE:`${url}/app/nomenclature/entite/data/`,
    URL_DECISION:`${url}/app/nmDecision/nmdecisionByTypeDec`,
    URL_LIST_UTILISATEUR:`${url}/gateway/nomenclature/adm/profile/dataUtilisateurs`,
    URL_LIST_MOTIF_DEC:`${url}/app/nomenclature/nmMotifDecison`

}