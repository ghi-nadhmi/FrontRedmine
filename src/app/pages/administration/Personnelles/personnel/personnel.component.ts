import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonService, CONSTANTE_SQL, CriteriaSearch, SearchObject, SearchObjectTreatment, TAdmPersonnel } from '@app/shared';
import { ConfigService } from '@app/shared/services/config.service';
import { LayoutService } from '@app/shared/services/layout.service';
import { TranslateService } from '@ngx-translate/core';
 
import { VPersonnel } from '@app/shared/entites/administration/VPersonnel';
import { AdmPersonnelService } from '@app/shared/services/administration/adm-personnel.service';
import { ProjectsService } from '@app/shared/services/projects.service';
import { DetailuserService } from '@app/shared/services/detailuser.service';
 

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
  displayedColumns: string[] = ['numPiece', 'prenom','action'];
    datasource: any;
    data: any;
    
    limit = 10;
    offSet: Number;
    countPage: Number;

     //injection
     // @ViewChild() child :PersonnePhysiqueComponent;
  
     
   
    @ViewChild(MatTable, {static: true}) table: MatTable<any>;
    @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
    @ViewChild('matSort', {static: false}) sort: MatSort;
    value = 'Clear me';
    currentLang: string;
    toggleSearchCardFlag: boolean;
    public config: any = {};
  child: any;


    constructor(private layoutService: LayoutService,
                private configService: ConfigService,
                private translate: TranslateService,
                private dialog: MatDialog,
                private Allusers : ProjectsService, 
                private userdetail:DetailuserService
                
    ) {

        this.translate.onDefaultLangChange.subscribe((language) => {
            console.log(this.translate.getDefaultLang() + ' vs ' + language.lang);
            this.currentLang = language.lang;
        });

    }


    ngAfterViewInit(): void {
        this.datasource.sort = this.sort;
    }

    ngOnInit() {
      this.Allusers.getusers().subscribe((result) => {
        console.log("result", result)
               this.data = result;
               this.datasource = new MatTableDataSource(this.data[0].users.slice(0, this.limit));
             
             })
        this.toggleSearchCardFlag = false;
       
        // this.countPage= Math.round( this.elements.length/this.limit )+1;
        this.countPage = this.data[0].users.length;

        this.config = this.configService.templateConf;
        this.currentLang = this.config.layout.dir === 'rtl' ? 'ar' : 'fr';
        console.log(this.currentLang);



    }

    toggleSearchCard() {
        this.toggleSearchCardFlag = !this.toggleSearchCardFlag;
    }

    public onPaginateChange(event): void {
        this.limit = event.pageSize;
        this.offSet = event.pageIndex + 1;
        this.onSearch();
    }

    public onSearch(): void {
        this.datasource = new MatTableDataSource(this.data[0].users.slice(0, this.limit));
    }

    onEdit() {

    }
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.datasource.filter = filterValue.trim().toLowerCase();
    
        if (this.datasource.paginator) {
          this.datasource.paginator.firstPage();
        }
      }

    onDelete() {

    }

    onAdd() {
      
         
    }

    
    SetID(id:any,name:any){ this.userdetail.currentID=id;
    this.userdetail.currentName=name }; 
     

}
