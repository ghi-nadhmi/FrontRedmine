import { VAffectationPersonnel } from "../administration";

export class Doc {

    id:number ; 
    idDossier:number ; 
    idNmTypeDoc:number ; 
    description:String  ; 
    codeType:String ;
    libelleTypeFr:String ; 
    libelleTypeAr:String ;
    idNmNatureDoc:number ;
    codeNature:String   ;
    libelleNatureFr:String ; 
    libelleNatureAr:String  ;
    nomFichier:String     ; 
    nbrCopie:number ; 
    idCourArr:number ;
    nodeRef:String ; 
    idAdmUser:number ;
    dtEnregistrement:Date ;
    refPiece:string ; 
    dtPiece:Date ; 
    organismePiece:string ; 
    mntPiece:number ; 
    dtEcheancePiece:Date ; 
    idActe:number;
    vaffectationPersonnel: VAffectationPersonnel;


     


}