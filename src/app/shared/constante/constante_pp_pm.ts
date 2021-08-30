import { environment } from '@environments/environment';
const url = environment.apiUrl;

export const CONSTANTE_PERSONNE = {

    
    // NM SEXE
    URL_SEXE: `${url}/nomenclature/sexe/`,

    //NM TYPE PIECE
    URL_TYPE_PIECE :`${url}/app/nomenclature/typePiece/`,

    //PERSONNE PHYSIQUE
    URL_PP :`${url}/app/personnePhysique/`,

    //PERSONNE PHYSIQUE For Morale Component
    URL_PP_MORALE :`${url}/app/personnePhysique/forMorale/`,

    //PERSONNE PHYSIQUE
    URL_PM :`${url}/app/personneMorale/`,

    //Status JURID
    URL_SJ :`${url}/app/nomenclature/statutJurid/`,

  //SItUATION PERSONNE 
    URL_SP :`${url}/app/situationPersonne/`,

    //SItUATION PERSONNE By ID Personne
    URL_SP_ByIdPersonne :`${url}/app/situationPersonne/getListByIdPersonne/`,

    //PERSONNE PHYSIQUE UPDATE
    URL_PP_UPDATE :`${url}/app/personnePhysique/update`,

    //PERSONNE Morale UPDATE
    URL_PM_UPDATE :`${url}/app/personneMorale/update`,

    //PERSONNE Physique UPDATE
    URL_PP_BYNumPiece :`${url}/app/personnePhysique/getListByNumeroPiece/`,

    //PERSONNE Morale UPDATE
    URL_PM_BYNumPiece :`${url}/app/personneMorale/getListByNumeroPiece/`,
    URL_PP_FIND_BY_ID :`${url}/app/personnePhysique/findById/`,
   

   

};
