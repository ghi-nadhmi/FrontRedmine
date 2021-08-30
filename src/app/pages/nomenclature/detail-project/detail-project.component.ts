import { Component, OnInit, ViewChild } from '@angular/core';
 
import { ConfigService } from '@app/shared/services/config.service';
import { DetailProjectService } from '@app/shared/services/detail-project.service';
import { LayoutService } from '@app/shared/services/layout.service';
import { ProjectsService } from '@app/shared/services/projects.service';
 
import { TranslateService } from '@ngx-translate/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {Direction} from '@angular/cdk/bidi';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddEditEntiteComponent } from '../entite/add-edit-entite/add-edit-entite.component';
import { TrackerService } from '@app/shared/services/tracker.service';
import { ProjectbyIdService } from '@app/shared/services/projectby-id.service';
 
@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.scss']
})
export class DetailProjectComponent implements OnInit {
  displayedColumns: string[] = [ 'nom', 'roles', 'action'];
  displayedColumns1: string[] = ['numPiece' , 'action'];
    datasource: any;
    data:any ;
    data2:any ;
    id : any;
    data1:any ;
    data4:any ;
    users = [] as any;
    L = [] as any;

    
    datasource2 : any;
     
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


    constructor(private layoutService: LayoutService,
                private configService: ConfigService,
                private translate: TranslateService,
                private dialog: MatDialog,
                private Detail :  DetailProjectService ,
                private project:ProjectsService ,
                private trackerById : TrackerService,
                private projectByID : ProjectbyIdService,
                
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
      this.id = this.Detail.currentID;
      this.project.getIssues().subscribe((result) => {
        console.log("result", result)
        this.data4 = result;
        for (let i = 0; i < this.data4[0].issues.length; i++) {
          if(this.data4[0].issues[i].project.id==this.Detail.currentID )
         { 
           const p ={id :this.data4[0].issues[i].tracker.id,name:this.data4[0].issues[i].tracker.name}
           const a = this.data4[0].issues[i].tracker.id;
           if (!(this.L.some(e => e === a)))
               {  this.L.push(a) ;
                  this.users.push(p) ;            }
               }
         
        } 
      
        this.datasource2 = new MatTableDataSource( this.users.slice(0, this.limit)); 
        console.log(this.users)
      }, (err) => { console.log(err) })
      
      this.project.getProjectsById(this.id).subscribe((result)=>{
        //console.log("result",result)
      this.data1 = result;
      console.log(this.data1[0].project.id)})
      
    
      this.id = this.Detail.currentID;
      this.project.getAllTrackers().subscribe((result)=>{
        console.log("result",result)
        this.data2 = result;
        console.log(this.data2);
       // this.datasource2 = new MatTableDataSource(this.data2[0].trackers.slice(0, this.limit));
      })
      this.project.getProjectByIDMemberships(this.id).subscribe((result)=>{
      console.log("result",result)
      this.data = result;
      
   
      this.datasource = new MatTableDataSource(this.data[0].memberships.slice(0, this.limit));
      // this.countPage= Math.round( this.elements.length/this.limit )+1;
    },(err)=>{console.log(err)})
      this.countPage = this.data[0].memberships.length;
      
     
      
      
      
      
      this.config = this.configService.templateConf;
      this.currentLang = this.config.layout.dir === 'rtl' ? 'ar' : 'fr';
      console.log(this.currentLang);
     
      
     
      
      
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

    ViewTrack(id:any,name : any){
      this.trackerById.id=id;
      this.trackerById.name=name;
      this.projectByID.currentID=this.id;
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '50%';
      dialogConfig.direction = this.currentLang === 'ar' ? 'rtl' : 'ltr';
      dialogConfig.closeOnNavigation = true;
      dialogConfig.hasBackdrop = true;
      dialogConfig.data = {
      
      }
      
       
      this.dialog.open(AddEditEntiteComponent, dialogConfig);}
      SetID(id:any){ this.projectByID.currentID=this.id };   
      

  }
function p(p: any) {
  throw new Error('Function not implemented.');
}

