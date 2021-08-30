import { decisionActes } from "./decisionActes";
import { tiersActes } from "./tiersActes";

export class actes 
{
	public  id:number;

	public  idNmTypeActe :number;

	public  idDossier :number;

	public  idRcExpert:number;

	public  idRcStructure :number;

	public  idStructurePp :number;

	public  idNmEtatActes :number;

	public  refActe :String; 

	public objet :String;

	public lieuActe :String;

	public  mntPaie :number;

	public mntAvancePaie :number;

	public  dtDebutActe : Date;

	public dtFinActe : Date;


	public dtEnregistrement : Date;
	public dtEchActe : Date;

	public dtEchPaie :Date;
	
	public dtEchInfo :Date;

	public dtEchHuissier:Date;

	public  dtMaj : Date;

	public hdebutAct :String;

	public hfinAct :String;

	public dtReportAct : Date;

	public hreportAct :String;

	public  decisionActes :decisionActes;
    
    public listTierActes : tiersActes [];

    public txtPv:String;
	
	public  flgSaveFinal :Number;

	public idAdmPersonnel :Number;
 
    public listTiers : any [];
	
	public	idNmDevise :number;
	

    constructor() {

    }


}