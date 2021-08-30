import { environment } from '@environments/environment';
const url = environment.apiUrl;

export const COURRIER_DEPART_URL = {
    GET_COURRIER_DEPART_VIEW: `${url}/app/courrierDepart/view/`,    
    SAVE_COURRIER_ARRIVES: `${url}/app/courrierArrivee/`,
    COURRIER_DEPART: `${url}/app/courrierDepart/data`,
    NATURE_COURRIER: `${url}/app/courrierArrivee/data/nature/courrier`,
    DESTINATAIRE:`${url}/app/courrierArrivee/data/dest/courrier`,
    CORRESPONDANCE : `${url}/app/courrierArrivee/data/type/correspondance/courrier`,
    ADD_COURRIER_ARRIVEE : `${url}/app/courrierArrivee` ,
    NATURE_COURRIER_CHILD : `${url}/app/courrierArrivee/data/type/courrier`,
    DESTINATAIRE_CHILD:`${url}/app/courrierArrivee/data/entite`,
    ETAT_COURRIER:`${url}/app/courrierArrivee/data/etat/courrier`,
    LIST_SUB_CORRESPONDANCE:`${url}/app/courrierArrivee/data/source/courrier`,
    DELETE_COURRIER_ARRIVES: `${url}/app/courrierArrivee/`,
    GET_COURRIER_DEPART_ID: `${url}/app/courrierDepart/`,
    GET_CORRESPONDANCE_PARENT_ID: `${url}/app/courrierArrivee/data/child/type/correspondance/courrier`,
    GET_CHILD_TYPE_COURRIER_ARRIVES_PARENT_ID: `${url}/app/courrierArrivee/data/child/type/courrier`,
    SEND_COURRIER_ARRIVE_BY_ID: `${url}/app/courrierArrivee/send/`,
    GET_JURID: `${url}/app/courrierArrivee/data/type/jurid`,
    GET_JURID_DATA: `${url}/app/courrierArrivee/data/jurid`,
    
    LIST_COURRIER_DISTRIBUTION: `${url}/app/courrierArrivee/data/distribution`,
    SEND_COURRIER_TO_ENTITE: `${url}/app/courrierArrivee/distribution`,

    LIST_COURRIER_RECEPTION: `${url}/app/courrierArrivee/data/accuse/reception`,
    RECEPTION_COURRIER: `${url}/app/courrierArrivee/send/accuse/reception`,

    //Search combox
    LIST_SEARCH_SOURCE: `${url}/app/courrierArrivee/data/search/source`,
    LIST_SEARCH_SOURCE_CHILD: `${url}/app/courrierArrivee/data/search/source/child`,
    LIST_AVOCAT: `${url}/app/courrierArrivee/data/child/source/courrier`,
    LIST_ENTITE: `${url}/app/courrierArrivee/data/entite`,
};


export const CONSTANTE_CA = {
    
    CODE_AVC: 'AVC',
    CODE_TIER_REP: 'TIER-REP',   
    CODE_EXPERT: 'EXPERT',
    CODE_HUISS_JUST: 'HUISS-JUST',
    CODE_TRIB: 'TRIB',
    CODE_PERSONNE_PHYSIQUE: 'PP',
    CODE_PERSONNE_MORALE: 'PM',
  
};
