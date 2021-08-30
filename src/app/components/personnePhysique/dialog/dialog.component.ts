import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit,Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {DateAdapter, MatPaginator, MatSort, MatTabGroup, MatTable, MatTableDataSource, MAT_DIALOG_DATA} from '@angular/material'
import { PersonnePhysiqueService } from '@app/shared/services/personnePhysique/personne-physique.service';
import {TranslateService} from "@ngx-translate/core";

import * as moment from 'moment';
import { PersonnePhysiqueComponent } from '../personne-physique.component';

function GetAge(birthDate) {

  var today = new Date();
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

function returnDate(date):Date{
  return new Date(date);
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})


    


export class DialogComponent implements OnInit {

  


  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  @ViewChild('matSort', { static: false }) sort: MatSort;

  displayedColumns: string[] = ["numeroPiece","prenom","nom","prenomPere"];
  datasource: MatTableDataSource<any>;
  personnePhysiqueForm:FormGroup;

limit = 1;
tabAlign:any;
offSet: Number;
countPage: Number;
situationPersonne;
conforme :any={}

env : any={};

  
  currentLang: any;
  dir: string
  selectedRowIndex: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  private fb: FormBuilder,
  private translate: TranslateService,
  private personnePhysiqueService:PersonnePhysiqueService,
  private dateAdapter: DateAdapter<Date>) {
    this.translate.onDefaultLangChange.subscribe((language) => {
      // this.translate.onLangChange.subscribe((lang) => {


      moment.locale(language.lang = this.data.currentLang);
      this.dir = this.data.dir;
      this.dateAdapter.setLocale( this.data.currentLang === 'ar' ? 'ar-tn' : 'fr');
      this.dateAdapter.setLocale( this.data.currentLang ? 'fr-fr' : 'ar-tn');
      this.currentLang = this.data.currentLang;

     
     
  });

  this.datasource = new MatTableDataSource<any>(this.data.list);
  this.initForm();
  
  
   }
 
  ngOnInit() {

    this.env = {};
    this.conforme = {};
    
    this.tabAlign = this.data.currentLang === 'ar' ? 'end' : 'start';
     this.personnePhysiqueService.getSituationPersonneByIdPersonne(this.data.list[0].idPersonne).subscribe((sp)=>{
      this.situationPersonne = sp['payload'][0]
      this.patchValue(this.data.list[0], this.situationPersonne);
      this.env.personne =this.data.list[0];
      this.env.situation =this.situationPersonne; 
        
      },(err)=>{
          // popup msg 
      })
   

  }

  mode(mode){
    this.env.mode=mode;
  }

  patchValue(personne:any,situation:any){

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
    
    
    
      }

  onclick(row){

    this.selectedRowIndex = row.id;
 
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }


  public onPaginateChange(event,row): void {
    this.limit = event.pageSize;
    this.offSet = event.pageIndex + 1;

    this.personnePhysiqueService.getSituationPersonneByIdPersonne(this.data.list[event.pageIndex].idPersonne).subscribe((sp)=>{
      this.situationPersonne = sp['payload'][0]
      this.patchValue(this.data.list[event.pageIndex],this.situationPersonne);
      this.env.personne =this.data.list[event.pageIndex];
      this.env.situation =this.situationPersonne;  
  
        
      },(err)=>{
          // popup msg 
      })

   
  
}

initForm(){
  this.personnePhysiqueForm=this.fb.group({
   nom: [null],
   prenom: [null],
   nomPere: [null],
   nomMere: [null],
   nomGrandPere: [null],
   lieuNaissance: [null],
   dateNaissance: [null],
   typePiece: [null],
   sexe: [this.data.listSexe],
   numPiece: [null],
   prenomMere: [null],
   datePiece: [null],
   lieuPiece: [null],
   age: [null],
   etaCivil: [this.data.listEtatCivil],
   email: [null],
   tel: [null]
   
   
   });

}



}
