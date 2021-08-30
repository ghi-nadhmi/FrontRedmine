import { TAdmRetour } from "./TAdmRetour";

export class TAdmProfile {
    id:number ;
    code:string;
    role:string;
    libelleFr:string;
    libelleAr:string;
    dateCreation:Date;
    idAdmApp:number ;
    idNmJurid:number ;
    dateEvent:Date;
    flgActif:number;
    listFunctionRetour : TAdmRetour [] ;
    listUtilisateursProfil: any [];
}