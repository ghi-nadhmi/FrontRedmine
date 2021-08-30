import {Component,OnInit,ViewChild,AfterViewInit, Input,Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSelect, MatSort} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators,FormBuilder, FormGroup} from '@angular/forms';
import {ErrorStateMatcher, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {TranslateService} from "@ngx-translate/core";
import {DateAdapter} from "@angular/material/core";
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import * as moment from 'moment';
import { DialogComponent } from './dialog/dialog.component';
import {SexeService} from "@app/shared/services";
import {TypePieceService} from "@app/shared/services/nomenclature/type-piece.service";
import {EtatCivilService} from "@app/shared/services/nomenclature/etat-civil.service";
import { PersonnePhysiqueService } from '@app/shared/services/personnePhysique/personne-physique.service';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs-compat';
import { ToastrService } from 'ngx-toastr';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { CustomDateAdapter } from '@app/adapters/custom-date-adapter';



function GetAge(birthDate) {

  var today = new Date();
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

function GetAgeCalander(birthDate) {
 
    var today = new Date();
    var age = today.getFullYear() - birthDate['_i'].year;
    var m = today.getMonth() - birthDate['_i'].month;
    if (m < 0 || (m === 0 && today.getDate() < birthDate['_i'].date)) {
        age--;
    }
    return age;
  }



function returnDate(date):Date{
  return new Date(date);
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}




@Component({
    selector: 'app-personne-physique',
    templateUrl: './personne-physique.component.html',
    styleUrls: ['./personne-physique.component.scss'],
    providers: [
      {
          provide: DateAdapter,
          useClass: CustomDateAdapter,
          deps: [MAT_DATE_LOCALE],
      },
      {
          provide: MAT_DATE_FORMATS,
          useValue: {
              parse: {
                  dateInput: ['YYYY-MM-DD HH:mm:ss.S', 'l', 'LL', moment.ISO_8601],
              },
              display: {
                  dateInput: 'DD–MM–YYYY',
                  monthYearLabel: 'MMM YYYY',
                  dateA11yLabel: 'LL',
                  monthYearA11yLabel: 'MMMM YYYY',
              },
          },
      },
  ]
 


})




export class PersonnePhysiqueComponent implements AfterViewInit ,OnInit{
  conforme: boolean = false;
  exceptionSearch: boolean = true;
  mode: string = "rien";
  getIdPersonne() {
    throw new Error('Method not implemented.');
  }




    
idPersonneResult: BehaviorSubject<any> = new BehaviorSubject(null);


    @Input() idPersonne : any;
    @Input() readOnly?: boolean;
    // @Output() newItemEvent = new EventEmitter<string>();
    //@ViewChild('matSort',{static: false}) sort: MatSort;
    currentLang: any;
    dir: string
    //list combo
    listSexe : any ;
    listTypePiece : any ;
    listEtatCivil : any ;
    numPiece : number ;
    dateNaissance : Date;
    pphysique:any;
    situationPersonne:any;
    listPersonneBynumPiece:any[];
    disabled:boolean=false;
    disableSearchPP:boolean ;
    personnePhysiqueForm:FormGroup;
    currentYear = new Date().getFullYear();
    minDate = new Date(this.currentYear - 18, 0, 1);
    maxDatePiece = new Date(this.currentYear ,new Date().getMonth(),new Date().getDate()+1);
    maxDate = new Date(this.currentYear -18,0,1);
    displayNumPiece:boolean = true;

   // maxDate = new Date().getDate();

    constructor(private fb: FormBuilder,  private translate: TranslateService,
      private dateAdapter: DateAdapter<Date>,private dialog : MatDialog,
      private sexService:SexeService,
      private typePieceService:TypePieceService,
      private etatCivilService:EtatCivilService,
      private toastr: ToastrService,
      private personnePhysiqueService : PersonnePhysiqueService) {
      //translate & adapter for calendar
      this.currentLang = this.translate.getDefaultLang();
      this.translate.onDefaultLangChange.subscribe((language) => {
         // this.currentLang = language.lang;
          this.dir = language.lang === 'ar' ? 'rtl' : 'ltr';
          //this.dateAdapter.setLocale(language.lang === 'ar' ? 'ar-LY' : 'fr');
          this.dateAdapter.setLocale(language.lang === 'ar' ? 'ar-tn' : 'fr');
      });

      this.translate.onDefaultLangChange.subscribe((language) => {
       // console.log(this.translate.getDefaultLang() + ' vs ' + language.lang);
      //  this.currentLang = language.lang;
    });


    this.initForm();
    this.readOnly=false;
    this.displayNumPiece = true;
        // this.translate.onLangChange.subscribe((lang) => {
        //     if (lang.lang === 'ar') this.dateAdapter.setLocale('ar_DZ');
        //     else if (lang.lang === 'fr') this.dateAdapter.setLocale('fr-FR');     
        //   });

    }


    ngAfterViewInit() {
      setTimeout(() => {
          const curDefaultLang = this.translate.getDefaultLang();
          this.dir = curDefaultLang === 'ar' ? 'rtl' : 'ltr';

          // moment.locale(curDefaultLang === 'ar' ? 'ar' : 'fr');
          //this.dateAdapter.setLocale(curDefaultLang === 'ar' ? 'ar-ly' : 'fr');
          this.dateAdapter.setLocale(curDefaultLang === 'ar' ? 'ar-tn' : 'fr');
          // this.dateAdapter.format()
          // this.dateAdapter.setLocale(curDefaultLang === 'fr' ? 'fr-fr' : 'ar-LY');

          // this.printValue();
      }, 0);
  }

  ngOnInit(): void {
    this.disableSearchPP=false;
    this.initCombos();
    if(this.idPersonne!=null && this.idPersonne!="" && this.idPersonne!=undefined && this.idPersonne!=" "){
         
   this.personnePhysiqueService.getPersonnePhysiqueById(this.idPersonne).subscribe((p)=>{

    debugger
    this.pphysique = p['payload'];
 
   // this.pphysique.idPersonne
   debugger
    this.personnePhysiqueService.getSituationPersonneByIdPersonne(this.pphysique.idPersonne).subscribe((sp)=>{
      debugger
    this.situationPersonne = sp['payload'][0]
    //this.initCombos();
   
    this.patchValue(this.situationPersonne,this.pphysique);
  
      
    },(err)=>{
        // popup msg 
    })
     
   });

    }else{
      this.initCombos();
    }

   
   

  }



  patchValue(situation:any,personne :any){

    const dtNaissance = personne['dtNaissance'] === undefined ? null : personne['dtNaissance'].replace(" ", "T")+"Z";
    const dtPiece = personne['dtLivraisonPiece'] === undefined ? null : personne['dtLivraisonPiece'].replace(" ", "T")+"Z";

  
    this.personnePhysiqueForm.patchValue({
     
      etaCivil:situation['idNmEtatCivil'],
      email:  situation['email'],
      tel:  situation['telephone'] ,
      nom:  personne['nom'],
      prenom:  personne['prenom'],
      nomPere:  personne['prenomPere'],
      nomMere:  personne['nomMere'],
      nomGrandPere:  personne['prenomGrandPere'],
      lieuNaissance:  personne['lieuNaissance'],
      dateNaissance:  dtNaissance,
      typePiece: personne['idTypePiece'],
      sexe:  personne['idNmSexe'],
      numPiece:  personne['numeroPiece'],
      prenomMere:  personne['prenomMere'],
      datePiece:  dtPiece,
      lieuPiece:  personne['lieuLivraisonPiece'],
       age: GetAge( returnDate(dtNaissance)),
     
    });

  // traitement async (listTypePiece (--load) (--condition) (result -- render if(NA)))
  this.displayNumPiece = true;
  Array.from(this.listTypePiece).filter(e=>{
    if(e['code']==="NONE" && e['id']===personne['idTypePiece']){
      this.displayNumPiece = false; 
      this.personnePhysiqueForm.get('numPiece').setValue(" ");
    } 
  })
  

  }

    initCombos(){
          this.initComboSexe(); 
          this.initComboTypePiece();
          this.initComboEtatCivil();
         
    }

    initComboSexe(){
     
      this.sexService.getListSexe().subscribe((data)=>{
         this.listSexe = data['payload'];

       },()=>{},()=>{})
    }

    initComboTypePiece(){

      this.typePieceService.getListTypePiece().subscribe((data)=>{
  
         this.listTypePiece = data['payload'];
         this.listTypePiece = Array.from(this.listTypePiece).sort((a: { ordre: number; }, b: { ordre: number; }) => a.ordre - b.ordre);

        //  console.log("=*=*=*=*==*=****=====>"+this.listTypePiece[0].code)
       },()=>{},()=>{})
    }

    
    initComboEtatCivil(){

      this.etatCivilService.getListEtatCivil().subscribe((data)=>{
  
         this.listEtatCivil = data['payload'];
      
       },()=>{},()=>{})
    }

    initForm(){
         this.personnePhysiqueForm=this.fb.group({
          nom: [this.pphysique, { validators: [Validators.required], updateOn: "change" }],
          prenom: [, { validators: [Validators.required], updateOn: "change" }],
          nomPere: [, {  }],
          nomMere: [, {  }],
          nomGrandPere: [, {  }],
          lieuNaissance: [, {  }],
          dateNaissance: [, { }],
          typePiece: [this.listTypePiece, { validators: [Validators.required], updateOn: "change" }],
          sexe: [this.listSexe, {validators: [Validators.required]  }],
          numPiece: [null, { validators: [Validators.required], updateOn: "change" }],
          prenomMere: [null, {  }],
          datePiece: [null, {  }], 
          lieuPiece: [null, {  }],
          age: [null, {  }],
          etaCivil: [null, {validators: [Validators.required]  }],
          email: [null, { validators: [Validators.email] }],
          tel: [null, { validators: [Validators.min(1)] }]
          
          
          });

    }

    onChangeDate(event){

      this.personnePhysiqueForm.get('age').setValue(GetAgeCalander(event));

    }

     openDialog(numPiece,listPersonnePhysiueByNumPiece:any){
      this.conforme = false;
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      // dialogConfig.direction = this.currentLang === 'ar' ? 'rtl' : 'ltr';
      dialogConfig.direction = this.translate.getDefaultLang()=== 'ar' ? 'rtl' : 'ltr';
      dialogConfig.data = {
        dir : this.dir,
        currentLang:this.translate.getDefaultLang(),

      numPiece: numPiece,
      list:listPersonnePhysiueByNumPiece  ,
      listEtatCivil:this.listEtatCivil,
      listTypePiece : this.listTypePiece,
      listSexe:this.listSexe
      };
      // dialogConfig.width="80%";
      // dialogConfig.height="100%";
      const dialogRef = this.dialog.open(DialogComponent,dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result.mode ==="conforme"){
          this.patchValue(result.situation,result.personne)
          this.pphysique = result.personne;
          this.situationPersonne = result.situation;
          this.disabled=true;
          this.conforme = true;
          this.mode = result.mode;
   
          this.disableSearchPP=true;
        }else if(result.mode ==="modif"){
          this.patchValue(result.situation,result.personne)
          this.pphysique = result.personne;
          this.situationPersonne = result.situation;
          this.conforme = false;
          this.disabled=false;
          this.disableSearchPP=false
          this.mode = result.mode;
          this.conforme = false;
        }else{
          if(result.mode==="nconforme"){
              this.resetForm();
              this.mode = result.mode;
         
        this.personnePhysiqueForm.get('numPiece').setValue(result.personne['numeroPiece']);

          this.disabled=false;
          this.disableSearchPP=false}
        
        }
           
         if(result==="")
         this.mode = "rien";
       
        
      });
    
     }

    onChangeNumPiece(numPiece){
  
      if(this.idPersonne==null || this.idPersonne=="" || this.idPersonne==undefined ||this.idPersonne==" " || this.exceptionSearch==true){
          this.listPersonneBynumPiece = null;
    this.personnePhysiqueService.getPersonnePhysiqueByNumPiece(numPiece).subscribe((ppByNumPiece)=>{
     this.listPersonneBynumPiece = ppByNumPiece["payload"];
     if(this.listPersonneBynumPiece.length > 0 ){
       
      this.openDialog(numPiece,this.listPersonneBynumPiece);

      
     }else{
       if(numPiece!=null && numPiece!=""&&numPiece!=undefined){
        // if(this.currentLang=='ar'){
        //   this.toastr.error('', ' لا يوجد شخص طبيعي يتوافق مع وثيقة التعريف ');
        //  }else{
        //   this.toastr.error('', 'aucune personne physique ne correspond à ce numéro de pièce!');
        //  }
       }
   

     }
    },(err)=>{
      if(this.currentLang=='ar'){
        this.toastr.error('', ' خطأ داخلي يرجى الاتصال بالمسؤول');
       }else{
        this.toastr.error('', 'une erreur interne est survenue contacter votre administrateur!');
       }

    })

      }
  
 
       
     }

     onChangeTypePiece(idTypePiece){

      this.displayNumPiece = true;
      Array.from(this.listTypePiece).filter(e=>{
        if(e['code']==="NONE" && e['id']===idTypePiece){
          this.displayNumPiece = false;
        
        }
       
      })
        
     }


     validateForm(){
    debugger;
         if(!this.displayNumPiece){     
        this.personnePhysiqueForm.get('datePiece').setErrors(null);
        this.personnePhysiqueForm.get('numPiece').setErrors(null);
           }
         
       var idP;
      if(this.personnePhysiqueForm.valid){
        const pp = {
        
        "prenom": this.personnePhysiqueForm.get('prenom').value,
        "nom": this.personnePhysiqueForm.get('nom').value,
        "idTypePiece": this.personnePhysiqueForm.get('typePiece').value,
        "numeroPiece":this.displayNumPiece ?  this.personnePhysiqueForm.get('numPiece').value : "NA" ,
        "dtLivraisonPiece": this.displayNumPiece ?  this.personnePhysiqueForm.get('datePiece').value : " ",
        "lieuLivraisonPiece": this.displayNumPiece ?  this.personnePhysiqueForm.get('lieuPiece').value : " ",
        "dtNaissance": this.personnePhysiqueForm.get('dateNaissance').value,
        "lieuNaissance": this.personnePhysiqueForm.get('lieuNaissance').value,
        "prenomPere": this.personnePhysiqueForm.get('nomPere').value,
        "prenomGrandPere": this.personnePhysiqueForm.get('nomGrandPere').value,
        "prenomMere": this.personnePhysiqueForm.get('prenomMere').value,
        "nomMere": this.personnePhysiqueForm.get('nomMere').value,
        "idNmSexe": this.personnePhysiqueForm.get('sexe').value,
        "idNmEtatCivil":this.personnePhysiqueForm.get('etaCivil').value,
        "email":this.personnePhysiqueForm.get('email').value,
        "telephone":this.personnePhysiqueForm.get('tel').value
      }
     
      this.personnePhysiqueService.savePersonnePhysique(pp).subscribe((data)=>{     
     
           idP = data;
         
           this.idPersonneResult.next(idP.payload['idPersonne']);

        
      },(err)=>{
        
        if(this.translate.getDefaultLang()=='ar'){
          this.toastr.error('', ' خطأ داخلي يرجى الاتصال بالمسؤول');
         }else{
          this.toastr.error('', 'une erreur interne est survenue contacter votre administrateur!');
         }
      })
      }else{
 
        this.markFormGroupTouched(this.personnePhysiqueForm);
      }

    
     }




     validateFormEdit():any{
       
      debugger;
      var idP;

      if(!this.displayNumPiece){     
        this.personnePhysiqueForm.get('datePiece').setErrors(null);
        this.personnePhysiqueForm.get('numPiece').setErrors(null);
           }
    
     if(this.personnePhysiqueForm.valid){
       const pp = {
       
       "prenom": this.personnePhysiqueForm.get('prenom').value,
       "nom": this.personnePhysiqueForm.get('nom').value,
       "idTypePiece": this.personnePhysiqueForm.get('typePiece').value,
       "numeroPiece": this.displayNumPiece ?  this.personnePhysiqueForm.get('numPiece').value : "NA",
       "dtLivraisonPiece": this.displayNumPiece ?  this.personnePhysiqueForm.get('datePiece').value : " ",
       "lieuLivraisonPiece": this.displayNumPiece ?  this.personnePhysiqueForm.get('lieuPiece').value : " ",
       "dtNaissance": this.personnePhysiqueForm.get('dateNaissance').value,
       "lieuNaissance": this.personnePhysiqueForm.get('lieuNaissance').value,
       "prenomPere": this.personnePhysiqueForm.get('nomPere').value,
       "prenomGrandPere": this.personnePhysiqueForm.get('nomGrandPere').value,
       "prenomMere": this.personnePhysiqueForm.get('prenomMere').value,
       "nomMere": this.personnePhysiqueForm.get('nomMere').value,
       "idNmSexe": this.personnePhysiqueForm.get('sexe').value,
       "idNmEtatCivil":this.personnePhysiqueForm.get('etaCivil').value,
       "email":this.personnePhysiqueForm.get('email').value,
       "telephone":this.personnePhysiqueForm.get('tel').value,
       "id":this.pphysique.id,
       "idSituationPersonne":this.situationPersonne.id,
       "idPersonne":this.pphysique.idPersonne
     }
     //console.log(pp);
     this.personnePhysiqueService.updatePersonnePhysique(pp).subscribe((data)=>{    

          idP = data;
          this.idPersonneResult.next(idP.payload['idPersonne']);
          return 200;
     },(err)=>{
      
       
      if(this.currentLang=='ar'){
        this.toastr.error('', ' خطأ داخلي يرجى الاتصال بالمسؤول');
       }else{
        this.toastr.error('', 'une erreur interne est survenue contacter votre administrateur!');
       } 
       return null;
     })
     }else{
      this.markFormGroupTouched(this.personnePhysiqueForm);
      
     }

    
   
    }

    private markFormGroupTouched(formGroup: FormGroup) {
      (<any>Object).values(formGroup.controls).forEach(control => {
        control.markAsTouched();
  
        if (control.controls) {
          this.markFormGroupTouched(control);
        }
      });
    }


    public getIdPersonneResult(){
    
      return  this.idPersonneResult.asObservable();
    }

  public resetForm(){

    this.personnePhysiqueForm.reset();
  }

  public isNumber(evt)
  {
 evt = (evt) ? evt : window.event;
 var charCode = (evt.which) ? evt.which : evt.keyCode;
 if (charCode > 31 && (charCode < 48 || charCode > 57)) {
     return false;
 }
 return true; }



}
