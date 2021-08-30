import { environment } from '@environments/environment';
const url = environment.apiUrl;

export const CONSTANTE_NOMENCLATURE_URL = {

    // ADM PROFILE
    URL_ADM_PROFILE: `${url}/nomenclature/adm/profile/`,
    URL_ENTITES:  `${url}/app/nomenclature/entite/`,
    URL_ENTITES_LIST: `${url}/app/nomenclature/entite/data`,
    URL_JURDI:`${url}/app/nomenclature/jurid/`,
    URL_SALLE: `${url}/app//nomenclature/salle/`,
    URL_SALLE_LIST: `${url}/app/nomenclature/salle/data`,
    URL_CATEGORIE_ENTITE:`${url}/app/nomenclature/categorieEntite/`,
    URL_STAT_JURID:`${url}/app/nomenclature/statutJurid/`,
    URL_TYPE_COURRIER:`${url}/app/nomenclature/typeCourrier/`,
    URL_TYPE_COURRIER_DATA_PARENT:`${url}/app/nomenclature/typeCourrier/data/parent`,
    URL_TYPE_COURRIER_DATA_CHILD:`${url}/app/nomenclature/typeCourrier/data/child/`,
    URL_NATURE_TIERS:`${url}/app/nomenclature/nmNatureTiers/`,
  

    // NM SEXE
    URL_SEXE: `${url}/app/nomenclature/sexe/`,

    // NM Devise
    URL_DEVISE: `${url}/nomenclature/sexe/getListCurrencies`,

    //NM TYPE PIECE
    URL_TYPE_PIECE :`${url}/app/nomenclature/typePiece/`,

    //NM ETAT CIVIL
    URL_ETAT_CIVIL :`${url}/app/nomenclature/etatCivil/`,

    //PERSONNE PHYSIQUE
    URL_PP :`${url}/app/personnePhysique/`,

      // ADM PROFILE
 

  // NM SEXE
 

  // NM Devise
 

  //NM TYPE PIECE

  LIST_PROFIL: url + "/gateway/nomenclature/adm/profile/data",
  LIST_UTILISATEUR_ID_NM_JURID: url + "/nomenclature/adm/profile/listeUtilisateur/",
  EDIT_LIST_UTILISATEUR_ID_NM_JURID: url + "/nomenclature/adm/profile/listeUtilisateurFoEdit",

  SAVE_PROFIL: url + "/gateway/nomenclature/adm/profile/",
  UPDATE_PROFIL:  url+ "/gateway/nomenclature/adm/profile/" ,

  LISTE_APPLICATION: url + "/gateway/nomenclature/adm/profile/listeApplications",
  ADD_PROFIL_TREE:url + "/gateway/administration/adm/function/Tree",
  EDIT_PROFIL_TREE:url + "/gateway/administration/adm/function/TreeEdit/",
  URL_ADM_FUNCTION_PARENT: url +  "/gateway/nomenclature/adm/profile/listeAdmFoncParents",
  EDIT_PROFIL: url + "/gateway/nomenclature/adm/profile/",
  DELETE_PROFIL: url + "/gateway/nomenclature/adm/profile/deleteAdmProfile/",
 

  //PERSONNE PHYSIQUE




  
   
// ADM PERSONNELLE

LIST_PERSONNELLE: url + "/gateway/administration/personnel/data",
SAVE_PERSONNELLE: url + "/gateway/administration/personnel/",
UPDATE_PERSONNELLE: `${url}/gateway/administration/personnel/updatePersonnel2/`,
DELETE_PERSONNEL :`${url}/gateway/administration/personnel/`,



// ADM UTULISATEURS
LIST_PERSONNEL:`${url}/gateway/administration/personnel/listPersonnel`,
	//calendar
    URL_SALLE_LIST_COMBO: `${url}/app/nomenclature/salle/data/combox/`,
    URL_ENTITY_LIST_COMBO: `${url}/app/nomenclature/entite/data/combox/`,
    URL_SAVE_CALENDAR: `${url}/app/param/planningSalles/`,
    URL_LIST_EVENTS: `${url}/app/vCalendarEvent/`,
    URL_DELETE_CALENDAR: `${url}/app/param/planningSalles/`,

};
