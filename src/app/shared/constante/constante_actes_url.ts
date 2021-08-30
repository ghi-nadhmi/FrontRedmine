import { environment } from '@environments/environment';
const url = environment.apiUrl;

export const ACTES_URL = {
     
    LIST_ACTES: `${url}/app/actes/data`,
    SAVE_ACTE: `${url}/app/actes/`,
    EDIT_ACTE: `${url}/app/actes`,


   //NM TYPE ACTE

    LIST_NM_TYPE_ACTE: `${url}/app/nmTypeActes/data`,
    NM_TYPE_ACTE: `${url}/app/nmTypeActes`,


    //DECISION ACTE


    LIST_DECISIONS_ACTES :`${url}/app/nmDecision/nmdecisionActe`,
    NMDECISION: `${url}/app/nmDecision`,
    DECISIONS_ACTES_ID_ACTES :`${url}/app/decisionsActes/data`,






};


export const CONSTANTE_ACTE = {
    
    CODE_DEC_REPORTED: 'DEC-REPORTED',
    CODE_DEC_DONE: 'DEC-DONE',
    CODE_DEC_CANCELED: 'DEC-CANCELED',

    CODE_DEC_DONE_ACTE: 'DEC-DONE-ACTE',
    CODE_DEC_CANCELED_ACTE: 'DEC-CANCELED-ACTE',
    CODE_DEC_DEL_DEPASSE: 'DEC-DEL-DEPASSE',

    


    CODE_ACTE_CONCILIATION : 'AUD_CONCIL',
    CODE_ACTE_DES_MIDIAT : 'DES-MIDIAT',
    CODE_ACTE_ASSIGNATION_DEFENDEUR : 'ASSIG-DEFENDEUR',

    CODE_NM_TYPE_ACTE_ORD :'ORD',
    CODE_NM_TYPE_ACTE_ACT :'ACTES'


  
};


