import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {Direction} from '@angular/cdk/bidi';
import {MatPaginator} from '@angular/material/paginator';
import {TranslateService} from '@ngx-translate/core';
import * as moment from 'moment';
import {LayoutService} from '@shared/services/layout.service';
import {ConfigService} from '@shared/services/config.service';
import {AddEditEntiteComponent} from '@pages/nomenclature/entite/add-edit-entite/add-edit-entite.component';
import {MatDialog} from '@angular/material';
 
import {MatDialogConfig} from '@angular/material/dialog';
import { PersonnePhysiqueComponent } from '../personnePhysique/personne-physique.component';
import { ProjectsService } from '@app/shared/services/projects.service';
import { CalendarComponent } from '../calendar/calendar.component';
 


@Component({
    selector: 'app-test-list',
    templateUrl: './test-list.component.html',
    styleUrls: ['./test-list.component.scss'],
   
})
export class TestListComponent implements OnInit, AfterViewInit {

    displayedColumns: string[] = ['numPiece', 'prenom', 'nomPere', 'nom', 'action'];
    datasource: any;
    elements = [
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'hhh', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
        {prenom: 'arfaoui', numPiece: 'sdfsdf', nomPere: 'mohamed', nom: 'kamel'},
    ];
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
        this.datasource = new MatTableDataSource(this.elements.slice(0, this.limit));
        // this.countPage= Math.round( this.elements.length/this.limit )+1;
        this.countPage = this.elements.length;

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
        this.datasource = new MatTableDataSource(this.elements.slice(0, this.limit));
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
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '50%';
        dialogConfig.direction = this.currentLang === 'ar' ? 'rtl' : 'ltr';
        dialogConfig.closeOnNavigation = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.data = {

        }
        this.dialog.open( CalendarComponent, dialogConfig);
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

     
}
