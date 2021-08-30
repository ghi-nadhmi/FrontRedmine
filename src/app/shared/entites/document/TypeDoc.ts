export class TypeDoc {
    id: number ; 
    code:string ; 
    libelleAr: string; 
    libelleFr:string ; 
    ordre:number ; 
   
    constructor(id?, code?, libelleAr?, libelleFr?, ordre?) {
        this.id=id ; 
        this.code=code ; 
        this.libelleAr= libelleAr; 
        this.libelleFr= libelleFr ; 
        this.ordre= ordre ; 
    }
}