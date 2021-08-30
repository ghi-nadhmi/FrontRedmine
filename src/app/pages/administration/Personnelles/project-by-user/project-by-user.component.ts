import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatPaginator, MatSort, MatDialog, MatDialogConfig, MatTableDataSource } from '@angular/material';
import { PersonnePhysiqueComponent } from '@app/components/personnePhysique/personne-physique.component';
import { ConfigService } from '@app/shared/services/config.service';
import { DetailProjectService } from '@app/shared/services/detail-project.service';
import { DetailuserService } from '@app/shared/services/detailuser.service';
import { LayoutService } from '@app/shared/services/layout.service';
import { ProjectbyIdService } from '@app/shared/services/projectby-id.service';
import { ProjectsService } from '@app/shared/services/projects.service';
import { TranslateService } from '@ngx-translate/core';
import { ParticipationComponent } from '../participation/participation.component';

@Component({
  selector: 'app-project-by-user',
  templateUrl: './project-by-user.component.html',
  styleUrls: ['./project-by-user.component.scss']
})
export class ProjectByUserComponent implements OnInit {
   

  id : any ;
  data:any;
  data1:any;
  element :any ;
  users = [] as any;
  c :any ;
  //L = []as any ;
  displayedColumns: string[] = ['numPiece', 'prenom','action'];
    datasource: any;
    name :any;
    
    data2:any ;
     
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

  constructor(private Detail : DetailuserService,private project: ProjectsService ,
    private layoutService: LayoutService,
    private configService: ConfigService,
    private translate: TranslateService,
    private dialog: MatDialog,
    private ProjectById :  DetailProjectService
) { 

     this.translate.onDefaultLangChange.subscribe((language) => {
      console.log(this.translate.getDefaultLang() + ' vs ' + language.lang);
      this.currentLang = language.lang;
  });

   
  }
  


  ngAfterViewInit(): void {
    this.datasource.sort = this.sort;
}


  ngOnInit(): void { 
    this.id = this.Detail.currentID;
    this.name = this.Detail.currentName;
    this.project.getProjects().subscribe((result)=>{
       
      this.data = result;
       
      for (let i = 0; i < this.data[0].projects.length; i++) {
        this.project.getProjectByIDMemberships((this.data[0].projects[i].id)).subscribe((result1) => {
          this.data1 = result1 ;
          for (let j = 0; j < this.data1[0].memberships.length; j++) {
            var obj = this.data1[0].memberships[j].user.id;
            if (obj==this.id)
            { var p ={id :this.data[0].projects[i].id,name :this.data[0].projects[i].name}
                this.users.push(p )
          }
              
              
          }  console.log(this.users)
          this.datasource = new MatTableDataSource(this.users.slice(0, this.limit));
       }) 
        
      }
     
  });
    
   
    this.toggleSearchCardFlag = false;
    
    
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
     
    
     
     
}
 removeDuplicates(colors) {
  let unique = {};
  colors.array.forEach(element => {
    colors.push(element)
  });
 
  return (unique);
}

test(){
    this.child.validateForm();
}

testModif(){
    this.child.validateFormEdit();
}
 
        
SetIDproject(id:any,name:any){ this.ProjectById.currentID=id ;
  this.ProjectById.currentName=name;
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = '50%';
  dialogConfig.direction = this.currentLang === 'ar' ? 'rtl' : 'ltr';
  dialogConfig.closeOnNavigation = true;
  dialogConfig.hasBackdrop = true;
  dialogConfig.data = {
    
    
};     
this.dialog.open( ParticipationComponent, dialogConfig);
  }
   
  }
  
   
  


