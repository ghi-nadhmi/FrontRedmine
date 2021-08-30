import { environment } from '@environments/environment';
const url = environment.apiUrl;

export const CONSTANTE_TIERS = {

    
 

    //list tier by id Dossier
    URL_TIERS_by_idDossier :`${url}/app/tiers/listTiersByIdDossier`,
  

    
    //PERSONNE PHYSIQUE
    URL_TIERS :`${url}/app/tiers/dataVTiers`,
    //save or update tiers
    URL_TIERS_saveOrUpdate :`${url}/app/tiers/saveOrUpdate/`,

    UTL_TIERS_DELETE : `${url}/app/tiers/`,

     //is unique personne
     UTL_TIERS_UNIQUE_PERSONNE : `${url}/app/tiers/isUniquePersonne/`


   

};
