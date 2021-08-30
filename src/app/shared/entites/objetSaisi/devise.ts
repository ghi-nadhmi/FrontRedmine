export class devise {

    id :number ; 
    code: string ; 
    libelleAr: string ; 
    libelleFr:string 
    symbole:string;
    ordre:number ; 
    constructor(id?, code?, libelleAr?, libelleFr?, ordre?, symbole?) {
        this.id=id ; 
        this.code=code ; 
        this.libelleAr= libelleAr; 
        this.libelleFr= libelleFr ; 
        this.ordre= ordre ; 
        this.symbole=symbole;
    }



}