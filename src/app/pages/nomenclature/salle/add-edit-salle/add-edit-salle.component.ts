import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Jurid } from '@app/shared/entites/nomenclature/Jurid';
import { JuridService } from '@app/shared/services/nomenclature/jurid.service';
import { SallesService } from '@app/shared/services/nomenclature/salles.service';
import { AppTranslateService } from '@app/shared/translate/app-translate.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-salle',
  templateUrl: './add-edit-salle.component.html',
  styleUrls: ['./add-edit-salle.component.scss']
})
export class AddEditSalleComponent implements OnInit {


  formSalle: FormGroup;
  codeExist: boolean = false;
  listeSalles: any;
  submit: boolean = true ;
  listeJuird: Jurid[];
  currentLang: any;
  selectedValueJuird: Jurid ;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
    public appTranslateService: AppTranslateService,
    public translate: TranslateService,private salleService:SallesService,@Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<AddEditSalleComponent>,public juridService:JuridService) { }

  ngOnInit() {
     
    this.currentLang = this.appTranslateService.getDefaultLang() ;
    this.translate.onLangChange.subscribe(() => {
      this.currentLang = this.translate.currentLang;
    });

    this.getListJuirdiction() ; 
     
    //this.getListSalles();
    this.selectedValueJuird = new Jurid(this.data.id, this.data.idNmjurid, this.data.codeJurid, this.data.libelleFrJurid,this.data.libelleArJurid, this.data.ordre); 


    debugger ; 
    this.formSalle=this.formBuilder.group({
      code:[this.data.code, Validators.required],
      libelleAr:[this.data.libelleAr, Validators.required],
      libelleFr:[this.data.libelleFr, Validators.required],
      ordre:[this.data.ordre, Validators.required],
      idNmJuridiction:[this.data.idNmjurid, Validators.required],

      
  }) 
  }

  public getListSalles(){
    this.salleService.getListSalle().subscribe(
       response => {
         if (response['code'] === '200') {
           this.listeSalles = response['payload'];
       
         }
       },
       error => {
         console.log('error :: ' + error);
       }
   )
 
   }


  isCodeExist(value){
   
    this.codeExist = false;
    this.codeExist = this.listeSalles.find(ident => ident.code == value) 
  
    this.codeExist = this.codeExist ? true : false  ; 
    return this.codeExist ; 
  
  } 

  getListJuirdiction(){
  
    this.juridService.getlistJurdiction().subscribe( 
     response => {
       if (response['code'] === '200') {
         this.listeJuird = response['payload']; 
         console.log("listeeeentite",this.listeJuird) ;       
       }
     },
     error => {
       console.log('error :: ' + error);
     }
   )   
   }


  addSalle() {
 
    debugger ; 
    let dataTosend;
    if (this.formSalle.valid ) {
  
      this.isCodeExist(this.formSalle.get('code').value) ; 
      console.log('aaaaaa', this.isCodeExist(this.formSalle.get('code').value)) 
       if (this.codeExist === false) {
      this.submit= true ;
      this.salleService.addsalle(this.formSalle.value).subscribe(
      response => {
        if (response['code'] === '200') {
          dataTosend = this.data;
         this.salleService.affmodifsalle === false ;
         this.submit=true ;
         this.salleService.selectSalle(dataTosend) ; 
         this.dialogRef.close();
         this.salleService.selectSalle(dataTosend) ; 
         
      } else if (response['code'] === '411') {
          this.toastr.error('ce code entité existe dans le systeme', ''); 
      } else {
          console.log('-1:' + response['code']);
          this.toastr.error('Erreur intern du systéme', '');
      } 
    
  },
  error => {
      console.log('-2');
      this.toastr.error('Erreur intern du systéme', '');
    });
  }   
}else 
  
  this.submit = false  ; 
  
 
  }

  editSalle(value) {
    debugger ;
    let dataTosend; 
   if (this.formSalle.valid){

     this.submit = true;
     value.id=this.data.id ; 
   this.salleService.updateListeSalle(value).subscribe(
     response => {
      dataTosend = this.data;
      this.salleService.affmodifsalle === true ;
      this.dialogRef.close();
      this.salleService.selectSalle(dataTosend) ;      
 
     });
 }else 
 
 this.submit = false ;
 }


  onNoClick(): void {
    this.dialogRef.close();
   }

}
