import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CONSTANTE_WS, SearchObject, SearchObjectTreatment } from '@app/shared';
import { devise } from '@app/shared/entites/objetSaisi/devise';
import { natureOs } from '@app/shared/entites/objetSaisi/natureOs';
import { ConfigService } from '@app/shared/services/config.service';
import { DeviseService } from '@app/shared/services/devise/devise.service';

import { NatureOSService } from '@app/shared/services/objetSaisi/nature-os.service';
import { ObjetsaisiService } from '@app/shared/services/objetSaisi/objetsaisi.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-edit-objet-saisi',
  templateUrl: './add-edit-objet-saisi.component.html',
  styleUrls: ['./add-edit-objet-saisi.component.scss']
})
export class AddEditObjetSaisiComponent implements OnInit {
  currentLang: string;
  public config: any = {};
  formObjetSaisi: FormGroup;
  codedata :any  ; 
  selectedValueNatureOs:natureOs ;
  maxDate = new Date(); 
  flgActif:boolean; 
  listeNatureOs:natureOs[] ;
  searchObject: SearchObject;
  test: boolean;
  listDevise: devise[];
  selectedDevise: devise;
  constructor(private dialogRef: MatDialogRef<AddEditObjetSaisiComponent>, @Inject(MAT_DIALOG_DATA) public data,
  private translate: TranslateService,private formBuilder: FormBuilder,
  private configService: ConfigService, private dialog: MatDialog,private natureOsService:NatureOSService,
  private objetSaisiService:ObjetsaisiService , private deviseService:DeviseService, private searchObjectTreatment: SearchObjectTreatment ) { 
  this.translate.onDefaultLangChange.subscribe((language) => {
    this.currentLang = language.lang;
  });

}

  ngOnInit() {
    this.config = this.configService.templateConf;
    this.currentLang = this.translate.getDefaultLang();
    this.getListNatureOs() ; 
    this.searchObject = this.searchObjectTreatment.treatementSearchObject(0, 0, "ordre", " asc");
    this.getListDevise(); 
    //this.flgActif = false ; 
    debugger ; 
    this.selectedValueNatureOs = new natureOs(this.data.id,this.data.codeNatureOs,this.data.libelleArNatureOs,this.data.libelleFrNatureOs,this.data.ordre) ; 
    this.selectedDevise = new devise (this.data.id,this.data.codeNatureOs,this.data.libelleArNatureOs,this.data.libelleFrNatureOs,this.data.ordre) ; 
  
    debugger ; 
    this.formObjetSaisi = this.formBuilder.group({
      idNmNatureOs:[this.objetSaisiService.affmodifObjetSaisi?this.data.ObjetSaisiModif.idNmNatureOs:null,Validators.required],
      numObjet:[this.objetSaisiService.affmodifObjetSaisi?this.data.ObjetSaisiModif.numObjet:null,Validators.required],
      libelleObjet:[this.objetSaisiService.affmodifObjetSaisi?this.data.ObjetSaisiModif.libelleObjet:null,Validators.required],
      descObjet:[this.objetSaisiService.affmodifObjetSaisi?this.data.ObjetSaisiModif.descObjet:null,Validators.required],
      refObjet:[this.objetSaisiService.affmodifObjetSaisi?this.data.ObjetSaisiModif.refObjet:null,Validators.required],
      lieuObjet:[this.objetSaisiService.affmodifObjetSaisi?this.data.ObjetSaisiModif.lieuObjet:null,Validators.required],
      organisme:[this.objetSaisiService.affmodifObjetSaisi?this.data.ObjetSaisiModif.organisme:null,Validators.required],
      mntEstime:[this.objetSaisiService.affmodifObjetSaisi?this.data.ObjetSaisiModif.mntEstime:null,Validators.required],
      dtEcheance:[this.objetSaisiService.affmodifObjetSaisi?new Date(this.data.ObjetSaisiModif.dtEcheance):null],
      dtSaisi:[this.objetSaisiService.affmodifObjetSaisi?new Date(this.data.ObjetSaisiModif.dtSaisi):null,Validators.required],
      idNmDevise:[this.objetSaisiService.affmodifObjetSaisi?this.data.ObjetSaisiModif.idNmDevise: null],
      flgPerissable:[this.objetSaisiService.affmodifObjetSaisi?this.data.ObjetSaisiModif.flgPerissable: null ]
    })

    
    
   /*  this.selectedDevise.id = this.listDevise[0].id ; 
    console.log("teeeeeeeeeeeeeeeeeee", this.selectedDevise.id) ;  */

  }

  getListNatureOs(){
    
    this.natureOsService.getListNatureOSWithoutFiltre().subscribe(
    response => {
      if (response['code'] === '200') {
        this.listeNatureOs = response['payload'];
        
        
      }
    },
    error => {
      console.log('error :: ' + error);
    }
  
    )

  }

  getListDevise(){
    this.deviseService.getListDeviseWithFiltre(this.searchObject).subscribe(
      response => {
        if (response['code'] === CONSTANTE_WS.SUCCESS) {
          this.listDevise = response['payload']['data'] ; 
          if (! this.objetSaisiService.affmodifObjetSaisi){
          this.formObjetSaisi.get('idNmDevise').setValue(this.listDevise[0].id) ; 
          }

        }

      })

  }

  onCancel() {
    this.dialogRef.close();
  }

  addObjetSaisi(){
    debugger ; 
    
    if (this.formObjetSaisi.valid){
    let objectSaisiToSend = {

      idNmNatureOs:parseInt(this.formObjetSaisi.get('idNmNatureOs').value),
      idNmDevise:parseInt(this.formObjetSaisi.get('idNmDevise').value),
      idDossier:parseInt(this.data.idDossier),
      numObjet:this.formObjetSaisi.get('numObjet').value,
      libelleObjet:this.formObjetSaisi.get('libelleObjet').value,
      descObjet:this.formObjetSaisi.get('descObjet').value,
      refObjet:this.formObjetSaisi.get('refObjet').value,
      lieuObjet:this.formObjetSaisi.get('lieuObjet').value,
      organisme:this.formObjetSaisi.get('organisme').value,
      mntEstime:parseInt(this.formObjetSaisi.get('mntEstime').value),
      dtSaisi:new Date(this.formObjetSaisi.get('dtSaisi').value),
      flgPerissable:this.formObjetSaisi.get('flgPerissable').value,
      dtEcheance:this.formObjetSaisi.get('flgPerissable').value===true?new Date(this.formObjetSaisi.get('dtEcheance').value):null
     
    
    }

    this.objetSaisiService.addObjetSaisi(objectSaisiToSend).subscribe(response => {
      if (response['code'] === '200') {

        this.objetSaisiService.affmodifObjetSaisi === false;
        this.close({ status: 'OK' });
       
      }
    })
  } 
  }

  editObjetSaisi(){
     
    if (this.formObjetSaisi.valid){
    let objectSaisiToSend = {
      id:this.data.ObjetSaisiModif.id,
      idNmNatureOs:parseInt(this.formObjetSaisi.get('idNmNatureOs').value),
      idNmDevise:parseInt(this.formObjetSaisi.get('idNmDevise').value),
      idDossier:parseInt(this.data.idDossier),
      numObjet:this.formObjetSaisi.get('numObjet').value,
      libelleObjet:this.formObjetSaisi.get('libelleObjet').value,
      descObjet:this.formObjetSaisi.get('descObjet').value,
      refObjet:this.formObjetSaisi.get('refObjet').value,
      lieuObjet:this.formObjetSaisi.get('lieuObjet').value,
      organisme:this.formObjetSaisi.get('organisme').value,
      mntEstime:parseInt(this.formObjetSaisi.get('mntEstime').value),
      dtSaisi:new Date(this.formObjetSaisi.get('dtSaisi').value),
      flgPerissable:this.formObjetSaisi.get('flgPerissable').value,
      dtEcheance:this.formObjetSaisi.get('flgPerissable').value===true?new Date(this.formObjetSaisi.get('dtEcheance').value):null
    
    }

    this.objetSaisiService.updateObjetSaisi(objectSaisiToSend).subscribe(response => {
      if (response['code'] === '200') {
        
        this.objetSaisiService.affmodifObjetSaisi === true;
       
        this.close({ status: 'OK' });
        
      }
    })
  }
  }


  close(feedback = null): void {
    this.dialogRef.close(feedback);
  }





}

