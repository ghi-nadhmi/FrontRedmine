import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MatPaginator, MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { CONSTANTE_WS, SearchObject, SearchObjectTreatment } from '@app/shared';
import { objetSaisi } from '@app/shared/entites/objetSaisi/objetSaisi';
import { VobjetSaisi } from '@app/shared/entites/objetSaisi/VobjetSaisi';
import { ConfigService } from '@app/shared/services/config.service';
import { DossierService } from '@app/shared/services/dossiers/dossier.service';
import { ObjetsaisiService } from '@app/shared/services/objetSaisi/objetsaisi.service';
import { TranslateService } from '@ngx-translate/core';
import { AddEditObjetSaisiComponent } from '../add-edit-objet-saisi/add-edit-objet-saisi.component';
import { DeleteObjetSaisiComponent } from '../delete-objet-saisi/delete-objet-saisi.component';

@Component({
  selector: 'app-objet-saisi',
  templateUrl: './objet-saisi.component.html',
  styleUrls: ['./objet-saisi.component.scss']
})
export class ObjetSaisiComponent implements OnInit {
  
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild('matSort', { static: false }) sort: MatSort;

  dataSource: MatTableDataSource<VobjetSaisi>;
  @Input() idDossier: number;
  displayedColumns:string[]= ['libelleNatureObjet','libelleObjet','refObjet','organismeObjet','action']  
  rows = [];
  countPage: Number;
  temp = [];
  searchObject: SearchObject;
  currentLang: string;
  public config: any = {};
  objetSaisiById: objetSaisi;
  selectedObjetSaisi: objetSaisi;
  currentlistObjetSaisi: objetSaisi;
  constructor( private configService: ConfigService,private translate: TranslateService,
    private dialog: MatDialog,private searchObjectTreatment: SearchObjectTreatment,
    private objetSaisiService:ObjetsaisiService,private dossierService : DossierService,
    ) {

    this.translate.onDefaultLangChange.subscribe((language) => {
      this.currentLang = language.lang;
    });
  }

  ngOnInit() {
    this.config = this.configService.templateConf;
    this.currentLang = this.translate.getDefaultLang();
    this.searchObject = this.searchObjectTreatment.treatementSearchObject(5, 0, "dtMaj", "desc nulls last");
    this.getListObjetSaisiWithFiltre() ;
  }

  getListObjetSaisiWithFiltre(){
    debugger ; 
    this.objetSaisiService.getListObjetSaisiwithFiltre(this.idDossier,this.searchObject).subscribe(
      response => {
        debugger ; 
        if (response['code'] === CONSTANTE_WS.SUCCESS) {
          this.countPage = response['payload']['total'];
          this.rows = response['payload']['data'];

          this.countPage = response['payload']['total'];

          this.dataSource = new MatTableDataSource<VobjetSaisi>(
            response['payload']['data']
          );
          console.log("objetSAISI",this.dataSource);
          this.temp = this.rows;
        }
      },
      error => {
        console.log('error :: ' + error);
      }
    )
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

  public onPaginateChange(event): void {
    this.searchObject.pagination.offSet = event['pageIndex'];
    this.searchObject.pagination.limit = event['pageSize'];
    this.getListObjetSaisiWithFiltre();
  }

  public getObjetSaisiById(id){
    this.objetSaisiService.getListObjetSaisiById(id).subscribe(response => {
      if (response['code'] === '200') {
        this.objetSaisiById = response['payload'];
      }
    }, err => {
      console.log(err);
    })

  }

  public getRow(objetSaisi: objetSaisi) {
    this.selectedObjetSaisi = objetSaisi;
    if (this.selectedObjetSaisi.id != null) {
      this.getObjetSaisiById(this.selectedObjetSaisi.id);
    }
    console.log('selectedDataObjet',this.selectedObjetSaisi) ; 

  }

  onAddObjetSaisi(){
    debugger; 
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '65%';
    dialogConfig.direction = this.currentLang === 'ar' ? 'rtl' : 'ltr';
    dialogConfig.closeOnNavigation = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
      idDossier: this.idDossier
    }
    const dialogRef  = this.dialog.open(AddEditObjetSaisiComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.status === 'OK') {
        this.searchObject = this.searchObjectTreatment.treatementSearchObject(5, 0, "dtMaj", "desc nulls last");
        this.getListObjetSaisiWithFiltre();
      }
    });


  }


  onEditObjetSaisi(){
    debugger ; 
    let ObjetSaisiModif ; 
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '65%';
    dialogConfig.direction = this.currentLang === 'ar' ? 'rtl' : 'ltr';
    dialogConfig.closeOnNavigation = true;
    dialogConfig.hasBackdrop = true;
    this.currentlistObjetSaisi = { ...this.selectedObjetSaisi};
    ObjetSaisiModif = this.currentlistObjetSaisi;
    dialogConfig.data = {
      ObjetSaisiModif,
      idDossier: this.idDossier
    }
    const dialogRef  = this.dialog.open(AddEditObjetSaisiComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.status === 'OK') {
        this.searchObject = this.searchObjectTreatment.treatementSearchObject(5, 0, "dtMaj", "desc nulls last");
        this.getListObjetSaisiWithFiltre();
      }
    });

  }

  onDeleteObjetSaisi(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    dialogConfig.direction = this.currentLang === 'ar' ? 'rtl' : 'ltr';
    dialogConfig.closeOnNavigation = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {}
    const dialogRef = this.dialog.open(DeleteObjetSaisiComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.status === 'OK') {
      this.objetSaisiService.deleteObjetSaisi(this.selectedObjetSaisi.id).subscribe(
        response => {
          if (response['code'] === '200') {
            this.getListObjetSaisiWithFiltre(); 
  }
})
      }  });

    }


}
