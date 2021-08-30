import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONSTANTE_WS, SearchObject, SearchObjectTreatment } from '@app/shared';
import { nmDecision } from '@app/shared/entites/dossier/nmDecision';
import { nmEntite } from '@app/shared/entites/dossier/nmEntite';
import { ConfigService } from '@app/shared/services/config.service';
import { DecisionDossierService } from '@app/shared/services/decisionDossier/decision-dossier.service';
import { JuridService } from '@app/shared/services/nomenclature/jurid.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-decision-dossier',
  templateUrl: './decision-dossier.component.html',
  styleUrls: ['./decision-dossier.component.scss']
})
export class DecisionDossierComponent implements OnInit {
  currentLang: string;
  searchObject: SearchObject;
  searchObjectUtilisateurs:SearchObject ; 
  public config: any = {};
  @Input() idDossier: number;
  @Input() idNmJurid  : number;
  listDecision: any;
  selectedValueDecision:nmDecision  ; 
  selectedValueEntite:nmEntite ; 
  selectedValueAdm:any ;
  selectedValueMotif:any;
  selectedValueJuird:any ;   
  formDecision: FormGroup;
  listEntite: any;
  listUtilisateurs:any ; 
  maxDate:Date = new Date()
  listMotifDec: any;
  codeNmDecision: string;
  listeJuird: any;


  constructor(private searchObjectTreatment: SearchObjectTreatment,
    private configService: ConfigService, private formBuilder: FormBuilder,
    private translate: TranslateService, private decisionDossierService:DecisionDossierService,public juridService: JuridService){
      
      this.translate.onDefaultLangChange.subscribe((language) => {
      console.log(this.translate.getDefaultLang() + ' vs ' + language.lang);
      this.currentLang = language.lang; 
  }); 

}

  ngOnInit() {
    this.config = this.configService.templateConf;
    this.currentLang = this.translate.getDefaultLang();
    this.searchObject = this.searchObjectTreatment.treatementSearchObject(0, 0, "ordre", " asc");
    this.searchObjectUtilisateurs = this.searchObjectTreatment.treatementSearchObject(0, 0, "", "");  
    this.getListDecision() ; 
    this.getListEntite(); 
    this.getListUtilisateurs() ; 
    this.getListMotifDec(); 
    this.getListJuridiction() ;
    
    this.formDecision = this.formBuilder.group({
      idNmDecision:[null,this.formBuilder.group({
        id: [null, Validators.required],
        code: [null],
        dtMaj: [null],
        libelleAr: [null],
        libelleFr: [null],
        ordre: [null]
      }), Validators.required],
      idNmJurid:[],
      idAdmPersonnel:[],
      idNmMotifDecision:[],
      dtDecision:[new Date()],
      idNmEntite:[],
      txtDecision:[]


    })



  }

  getListDecision(){
    debugger ; 
    this.decisionDossierService.getListdecision("'DEC-DOSS'",this.searchObject).subscribe(
      response => {
        if (response['code'] === CONSTANTE_WS.SUCCESS) {
          this.listDecision = response['payload']['data'] ; 
          console.log("listdecision",  this.listDecision) ; 
  }
   })
  }
  getListEntite(){
    this.decisionDossierService.getListEntite(this.searchObject).subscribe(
      response => {
        if (response['code'] === CONSTANTE_WS.SUCCESS) {
          this.listEntite = response['payload']['data'] ; 
          console.log("listlistEntite",  this.listEntite) ; 
  }
})
  }

  getListUtilisateurs(){
    this.decisionDossierService.getListAdmUtilisateurs(this.searchObjectUtilisateurs).subscribe(
      response => {
        if (response['code'] === CONSTANTE_WS.SUCCESS) {
          this.listUtilisateurs = response['payload']['data'] ; 
          console.log("listlistuTILISATEUR",  this.listUtilisateurs) ; 
  }
})

  }

  getListMotifDec(){
    this.decisionDossierService.getListMotifDec("'DEC-DOSS-DESSAIS'",this.searchObject).subscribe(
      response => {
        if (response['code'] === CONSTANTE_WS.SUCCESS) {
          this.listMotifDec = response['payload']['data'] ; 
          console.log("listMotif",  this.listMotifDec) ; 
  }
   })
  }

  getListJuridiction() {
     this.juridService.getlistJurdiction().subscribe(
        response => {
            if (response['code'] === CONSTANTE_WS.SUCCESS) {
                this.listeJuird = response['payload'];
               
            }
        })

}


  getAfficheListDecision () {
  
    this.codeNmDecision = this.formDecision.value.idNmDecision.code ;  
  }

}
