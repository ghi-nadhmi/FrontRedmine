import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { CategorieEntite } from '@app/shared/entites/nomenclature/CategorieEntite';
import { Jurid } from '@app/shared/entites/nomenclature/Jurid';
import { ConfigService } from '@app/shared/services/config.service';
import { DetailProjectService } from '@app/shared/services/detail-project.service';
import { LayoutService } from '@app/shared/services/layout.service';
import { CategorieEntiteService } from '@app/shared/services/nomenclature/categorie-entite.service';
import { EntitesService } from '@app/shared/services/nomenclature/entites.service';
import { JuridService } from '@app/shared/services/nomenclature/jurid.service';
import { ProjectbyIdService } from '@app/shared/services/projectby-id.service';
import { ProjectsService } from '@app/shared/services/projects.service';
import { TrackerService } from '@app/shared/services/tracker.service';
import { AppTranslateService } from '@app/shared/translate/app-translate.service';
import { TranslateService } from '@ngx-translate/core';
 
import { Chart } from 'chart.js';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-add-edit-entite',
    templateUrl: './add-edit-entite.component.html',
    styleUrls: ['./add-edit-entite.component.scss']
})
export class AddEditEntiteComponent implements OnInit {
    formEntite: FormGroup;
    listeEntites: any;
    listeCategorieEntites: any;
    listeJuird: Jurid[];
    selectedValueJuird: Jurid;
    selectedValueCategorieEntite: CategorieEntite;
    submit = true;
    codeExist = false;
    config: any;
    currentLang: any;
    dir: any;
    IDT: any;
    nameT :any;
    nameP :any;
  IDp: any;
  data1: any;
  nb=0 ;
  n =0;
  

    constructor(private formBuilder: FormBuilder,
        
        private router: Router,
        private tracker :TrackerService,
        private project :ProjectsService,
        private projectById : DetailProjectService,
        
        @Inject(MAT_DIALOG_DATA) public data,
        private dialogRef: MatDialogRef<AddEditEntiteComponent>,
        private layoutService: LayoutService,
        public translate: TranslateService,
        private configService: ConfigService
        
    ) { 
        
        
    }

    ngOnInit() {
        
    this.IDp = this.projectById.currentID;
     
    this.IDT = this.tracker.id ;
    this.nameT = this.tracker.name ;
    this.nameP = this.projectById.currentName ;
    console.log(this.tracker.name);

    console.log(this.IDT); 
    console.log(this.IDp);
    this.project.getIssues().subscribe((result) => {
      console.log("result", result)
      this.data = result;
      for (let i = 0; i < this.data[0].issues.length; i++) {
      if(this.data[0].issues[i].project.id==this.IDp  )
       {  this.nb = this.nb+1 ;
          if(this.data[0].issues[i].tracker.id==this.IDT)
            {this.n=this.n+1 }
       }
      }
      var myChart = new Chart("myChart", {
        type: 'pie',
        data: {
          labels: ['rate '+String(this.tracker.name)+' in '+String(this.nameP) ],
          datasets: [{
            label:  this.tracker.name,
            data: [this.n*100/this.nb,100- this.n*100/this.nb],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
               
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      
      }
         
      });
    }, (err) => { console.log(err) })

        this.config = this.configService.templateConf;
        this.dir = this.config.layout.dir;
        this.currentLang = this.dir === 'rtl' ? 'ar' : 'fr';

         
         

         
    }

    public getListEntites() {

       

    }

     

    onCancel() {
        this.router.navigate(['/nomenclature/entites']);
    }


    isCodeExist(value) {

        this.codeExist = false;
        this.codeExist = this.listeEntites.find(ident => ident.code == value)

        this.codeExist = this.codeExist ? true : false;
        return this.codeExist;

    }

     
  

 
    onNoClick(): void {
        this.dialogRef.close();
    }


}
