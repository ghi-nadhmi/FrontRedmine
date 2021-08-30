export class Backoffice {
    id:number ; 
    idParent: number ; 
    code: String;
    libelleFr: String ; 
    libelleAr : String ; 
    ordre:number ;
    flgSrc : number;
    flgReDoss : number;
    flgCa : number;
    flgCd : number


    constructor(id?, idParent?, code?, libelleFr?, libelleAr?, ordre?, flgSrc?, flgReDoss?, flgCa?, flgCd?) {
        this.id = id;
        this.idParent = idParent;
        this.code = code;
        this.libelleFr = libelleFr;
        this.libelleAr = libelleAr;
        this.ordre = ordre;
        this.flgSrc = flgSrc;
        this.flgReDoss = flgReDoss;
        this.flgCa = flgCa;
        this.flgCd = flgCd;
    }






}