import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort} from '@angular/material';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { PersonnePhysiqueComponent } from '@app/components/personnePhysique/personne-physique.component';
import {CONSTANTE_SQL, CriteriaSearch, SearchObject} from '@app/shared';
import {CategorieEntite} from '@app/shared/entites/nomenclature/CategorieEntite';
import {Jurid} from '@app/shared/entites/nomenclature/Jurid';
import {VEntite} from '@app/shared/entites/nomenclature/VEntite';
import {ConfigService} from '@app/shared/services/config.service';
import { DetailProjectService } from '@app/shared/services/detail-project.service';
import {LayoutService} from '@app/shared/services/layout.service';
import {CategorieEntiteService} from '@app/shared/services/nomenclature/categorie-entite.service';
import {EntitesService} from '@app/shared/services/nomenclature/entites.service';
import {JuridService} from '@app/shared/services/nomenclature/jurid.service';
import { ProjectsService } from '@app/shared/services/projects.service';
import {SearchObjectTreatment} from '@app/shared/tools';
import { TranslateService } from '@ngx-translate/core';
import { TrackerComponent } from '../tracker/tracker.component';
import {AddEditEntiteComponent} from './add-edit-entite/add-edit-entite.component';
import {DeleteEntiteComponent} from './delete-entite/delete-entite.component';

@Component({
    selector: 'app-entite',
    templateUrl: './entite.component.html',
    styleUrls: ['./entite.component.scss']
})
export class EntiteComponent implements OnInit {

    displayedColumns: string[] = ['numPiece', 'prenom', 'nomPere', 'nom', 'action'];
    datasource: any;
    data:any ;
    data2:any ;
     
    limit = 10;
    offSet: Number;
    countPage: Number;

     //injection
     // @ViewChild() child :PersonnePhysiqueComponent;
  
     
     @ViewChild("child",{static: false}) child:PersonnePhysiqueComponent;
    @ViewChild(MatTable, {static: true}) table: MatTable<any>;
    @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
    @ViewChild('matSort', {static: false}) sort: MatSort;
    value = 'Clear me';
    currentLang: string;
    toggleSearchCardFlag: boolean;
    public config: any = {};


    constructor(private layoutService: LayoutService,
                private configService: ConfigService,
                private translate: TranslateService,
                private dialog: MatDialog,
                private Allproject: ProjectsService,
                private detail : DetailProjectService
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
        this.toggleSearchCardFlag = false;
        this.Allproject.getProjects().subscribe((result)=>{
            console.log("result",result)
            this.data= result;
            this.datasource= new MatTableDataSource(this.data[0].projects.slice(0, this.limit));
     
          },(err)=>{console.log(err)})
        
        // this.countPage= Math.round( this.elements.length/this.limit )+1;
        
        this.countPage = this.data[0].projects.length;
        

        this.config = this.configService.templateConf;
        this.currentLang = this.config.layout.dir === 'rtl' ? 'ar' : 'fr';
        console.log(this.currentLang);
    }
      

    
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.datasource.filter = filterValue.trim().toLowerCase();
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
        this.datasource = new MatTableDataSource(this.data[0].projects.slice(0, this.limit));
    }

    onEdit() {

    }
     

    onDelete() {

    }

    onAdd() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '50%';
        dialogConfig.direction = this.currentLang === 'ar' ? 'rtl' : 'ltr';
        dialogConfig.closeOnNavigation = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.data = {

        }
        this.dialog.open(AddEditEntiteComponent, dialogConfig);
        
        // dialogConfig.
        // dialogConfig.position = {
        //     // 'top': '0',
        //     left: '280'
        //     // right: '280'
        // };
         
    }

    test(){
        this.child.validateForm();
    }

    testModif(){
        this.child.validateFormEdit();
    }
    SetID(id:any,name:any){ this.detail.currentID=id
    this.detail.currentName=name };

}
