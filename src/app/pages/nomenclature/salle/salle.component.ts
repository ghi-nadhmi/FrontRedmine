import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { CONSTANTE_SQL, CriteriaSearch, SearchObject, SearchObjectTreatment } from '@app/shared';
import { Jurid } from '@app/shared/entites/nomenclature/Jurid';
import { VSalle } from '@app/shared/entites/nomenclature/VSalle';
import { ConfigService } from '@app/shared/services/config.service';
import { LayoutService } from '@app/shared/services/layout.service';
import { JuridService } from '@app/shared/services/nomenclature/jurid.service';
import { SallesService } from '@app/shared/services/nomenclature/salles.service';
import { AppTranslateService } from '@app/shared/translate/app-translate.service';
import { TranslateService } from '@ngx-translate/core';
import { AddEditSalleComponent } from './add-edit-salle/add-edit-salle.component';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.scss']
})
export class SalleComponent implements OnInit {

  listeSalles: VSalle[];
  dataSource: MatTableDataSource<VSalle> ;
  currentLang: any;
  searchObject: SearchObject;
  rows = [];
  countPage: Number;
  temp = [];
  isPopupOpened = true;

  displayedColumns: any[]  = ['code', 'libelle', 'libelleJurid', 'action'] ;

  selectedSalles: VSalle;
  salleById: any;
  formSalleSearch: FormGroup ;
  selectedValueJuird: Jurid;
  listeJuird: Jurid[];
  currentlistSalle: VSalle ; 
  public config: any = {};

  constructor(private salleService:SallesService,private searchObjectTreatment: SearchObjectTreatment,
     private layoutService: LayoutService,public appTranslateService: AppTranslateService,
    public translate: TranslateService,private dialog: MatDialog,
    private configService: ConfigService,
    private formBuilder: FormBuilder,public juridService:JuridService) {
    layoutService.changeEmitted$.subscribe(
      direction => {
          this.currentLang = direction === 'rtl' ? 'ar' : 'fr';
          console.log(this.currentLang);
      });
   }

  ngOnInit() {


    this.config = this.configService.templateConf;
    this.currentLang = this.config.layout.dir === 'rtl' ? 'ar' : 'fr';

    this.getListJuirdiction() ; 

    this.salleService.selectSalleSubject.subscribe((data)=>{
    
      this.dataSource = null;
      this.getListSalles(); 
    }); 
  

    this.searchObject = this.searchObjectTreatment.treatementSearchObject(10, 0, null, null);
    this.initDataListSalle() ;
    this.formSalleSearch = this.formBuilder.group({
      code: [null],
      libelle:[null],
      idNmJuridiction:[this.selectedValueJuird.id],
     

  }) 

  }

  search(){

    debugger ; 
    this.searchObject.pagination.offSet = 0;
    this.searchObject.pagination.limit =10;
    this.searchObject.dataSearch=[];
    if (this.formSalleSearch.get('code').value !== undefined && this.formSalleSearch.get('code').value !== '' && this.formSalleSearch.get('code').value !== null)
    this.searchObject.dataSearch.push(new CriteriaSearch('code',(this.formSalleSearch.get('code').value).toString(),
        CONSTANTE_SQL.EQUALS
    )
  );

  if (this.formSalleSearch.get('libelle').value !== undefined && this.formSalleSearch.get('libelle').value !== '' && this.formSalleSearch.get('libelle').value !== null && this.currentLang === 'ar' )
  this.searchObject.dataSearch.push(new CriteriaSearch('libelleAr',(this.formSalleSearch.get('libelle').value).toString(),
      CONSTANTE_SQL.UPPER_LIKE
  )
);

if (this.formSalleSearch.get('libelle').value !== undefined && this.formSalleSearch.get('libelle').value !== '' && this.formSalleSearch.get('libelle').value !== null && this.currentLang === 'fr' )
this.searchObject.dataSearch.push(new CriteriaSearch('libelleFr',(this.formSalleSearch.get('libelle').value).toString(),
    CONSTANTE_SQL.UPPER_LIKE
)
);
if (this.formSalleSearch.get('idNmJuridiction').value!== undefined && this.formSalleSearch.get('idNmJuridiction').value!== '' && this.formSalleSearch.get('idNmJuridiction').value !== null   )
this.searchObject.dataSearch.push(new CriteriaSearch('idNmjurid', (this.formSalleSearch.get('idNmJuridiction').value).toString() ,
    CONSTANTE_SQL.EQUALS
)
);


this.initDataListSalle() ; 

  }
  



  public getListSalles(){
    this.salleService.getListSalle().subscribe(
       response => {
         if (response['code'] === '200') {
           this.listeSalles = response['payload'];
           this.dataSource = new MatTableDataSource<VSalle>(this.listeSalles) ;
           console.log('aaaaaaaaaaaaa', this.listeSalles)   ;

         }
       },
       error => {
         console.log('error :: ' + error);
       }
   )

   }

   public initDataListSalle() {


     this.salleService.getListSalleWithFilter(this.searchObject).subscribe(
       response => {
         if (response['code'] === '200') {
           this.countPage = response['payload']['total'];
           this.rows = response['payload']['data'];

           this.countPage = response['payload']['total'];

         this.dataSource = new MatTableDataSource<VSalle>(
           response['payload']['data']
         );
            console.log("salles",this.dataSource);
           this.temp = this.rows;
         }
       },
       error => {
         console.log('error :: ' + error);
       }
   )
 }


 public addSalle(){
  debugger ; 
  this.isPopupOpened = true;
  const dialogRef = this.dialog.open(AddEditSalleComponent,{

   
    width: '50%',
    
    data: {
     
    }
   });

   dialogRef.afterClosed().subscribe(result => {
     this.isPopupOpened = false;
   });

 } 

 getRow(salle:VSalle){
   debugger ; 
   this.selectedSalles= null ; 
   this.selectedSalles = salle ; 
   if (this.selectedSalles.id != null ){
     this.getSalleById(this.selectedSalles.id) ; 
   }


 }

 getSalleById (id){
   this.salleService.getListSalleById(id).subscribe( response=> {
    if (response['code'] === '200') {
      this.salleById = response['payload'];
    }
  }, err => {
    console.log(err);
   })
}


editSalle(){
  debugger ; 
  let salleModif ;
  salleModif={} ;
  this.isPopupOpened = true;
  this.currentlistSalle={...this.selectedSalles}
  salleModif= this.currentlistSalle ; 
  const dialogRef = this.dialog.open(AddEditSalleComponent, {

  
    width: '50%',
    
     data: salleModif
      
     
     
     
   });

 
   dialogRef.afterClosed().subscribe(result => {
     this.isPopupOpened = false;
   });
 

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
 


 

}
