import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '@app/shared';
import { ConfigService } from '@app/shared/services/config.service';
import { DashboardService } from '@app/shared/services/dashboard/dashboard.service';
import { LayoutService } from '@app/shared/services/layout.service';
import { TranslateService } from '@ngx-translate/core';
import * as Chart from 'chart.js';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';

import {ToastrModule, ToastrService} from 'ngx-toastr';

declare var require: any;

const data: any = require('@shared/data/chartist.json');


export class dataPie {

    labels : string []  ;
    datasets  : Datasets []  ;
    
      }
export class Dataset {

    data : number  ;
    backgroundColor : string  ; 
    
    }
    export class Datasets {

    
        backgroundColor : string []  ; 
        data : number []  ;
        
        }
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
        chartCourrierAr : any ;
   CourrierArPieUrl  : any ;
   chartCourrierFr : any ;
   CourrierArPieUrlFr  : any ;
   chartDossierFr : any ;
   chartDossierAr : any ;
   DossierArPieUrlFr  : any ;
   DossierArPieUrlAr  : any ;
   data: any;
   currentLang: string;
   public config: any = {};
    constructor(
        private configService: ConfigService,  
 
        public translate: TranslateService, private formBuilder: FormBuilder,
    private dashboardService: DashboardService,
    private commonService: CommonService ,
    
      ) {    
   
        this.translate.onDefaultLangChange.subscribe((language) => {
        console.log(this.translate.getDefaultLang() + ' vs ' + language.lang);
        this.currentLang = language.lang;
      });
      }
      ngOnInit() { 
        this.translate.onDefaultLangChange.subscribe((language) => {
          console.log(this.translate.getDefaultLang() + ' vs ' + language.lang);
          this.currentLang = language.lang;
        });
        this.config = this.configService.templateConf;
        this.currentLang = this.config.layout.dir === 'rtl' ? 'ar' : 'fr';
        this.CourrierArPieUrl  = document.getElementById('pie-chart-CourrierAr') as HTMLCanvasElement ;
        this.CourrierArPieUrlFr  = document.getElementById('pie-chart-CourrierFr') as HTMLCanvasElement ;
        this.DossierArPieUrlAr  = document.getElementById('pie-chart-dossierAr') as HTMLCanvasElement ;
        this.DossierArPieUrlFr  = document.getElementById('pie-chart-dossierFr') as HTMLCanvasElement ;
  this.getdashbordCourrierAr();

  this.getdashbordCourrierFr();
  this.getdashbordDossierAr();
  this.getdashbordDossierFr();
      }

returnIdCourrier()

{
 
  if(this.currentLang =='ar')
  return 'pie-chart-CourrierAr' ;
  else return 'pie-chart-CourrierFr' ;
}
returnIdDossier()

{
 
  if(this.currentLang =='ar')
  return 'pie-chart-dossierAr' ;
  else return 'pie-chart-dossierFr' ;
}

    getdashbordCourrierAr ( )
    { 
      
      this.dashboardService.getDahsboardCourrierAr(this.commonService.getAffectPersonnelCurrentUser().idNmJurid).subscribe(data => {
        var     datase   :    Dataset  []  = [] ;
       
        let result = data ;
        let labeles  : string []  = [] ; 
      
     
       let datanumber : number [] = [];
         let backgrounds  : string []  = [] ; 
        for (const [key, value] of Object.entries(result)) { 
         
          let p = new Datasets();
          datanumber.push(value.toFixed(2))
          backgrounds.push(this.getRandomColor()) ;
      
      
          labeles.push(key+ " :"+ value.toFixed(2)+ "%");
       
       
         
         
       
      }
      
      let datape = new dataPie ();
      datape.labels = labeles ;
      let pp = new Datasets ();
      pp.data = datanumber ;
      pp.backgroundColor = backgrounds ;
      let listdataset    : Datasets [] = [];
      listdataset.push(pp) ;
      datape.datasets = listdataset ;    
       
      
       
      
      
      this.data = datape
       
    
    this.chartCourrierAr =  new Chart(this.CourrierArPieUrl, {
        type: 'pie',
        data: {
          labels:labeles,
          datasets: [{
          
            backgroundColor:backgrounds,
            data: datanumber
          }]
        } ,
        options: {
          responsive: true,
          tooltips : {
            enabled  : true ,
            callbacks: {
              label: function(tooltipItem, data) {
                  var label = data.datasets[tooltipItem.datasetIndex].label || '';
    
                
                  label +=  data.labels[tooltipItem.index] 
                  return label;
              }
          }
          },
          title: {
            display: true,
            text: 'طورالوارد',
            fontSize : 20
          },
          animation: {
            
            duration: 0 ,
           animateScale : true  ,
            animateRotate : true ,
       
        },
        
      responsiveAnimationDuration: 0, // animation duration after a resize
        }
    });
       
    this.chartCourrierAr.render();
    /*
    var canvas =  pieChart1 ;
    var dataURL = canvas.toDataURL();*/
    //console.log(dataURL);
    /*
    $("#exportButton").click(function(){
        var pdf = new jsPDF();
        pdf.addImage(dataURL, 'JPEG', 0, 0);
        pdf.save("Nombre de clients par segment.pdf");
    });
      */
      
                }, err => {
                  console.log(err);
            
                });
    }
    getdashbordCourrierFr ( )
    { 
      
      this.dashboardService.getDahsboardCourrierFr(this.commonService.getAffectPersonnelCurrentUser().idNmJurid).subscribe(data => {
        var     datase   :    Dataset  []  = [] ;
       
        let result = data ;
        let labeles  : string []  = [] ; 
      
     
       let datanumber : number [] = [];
         let backgrounds  : string []  = [] ; 
        for (const [key, value] of Object.entries(result)) { 
         
          let p = new Datasets();
          datanumber.push(value.toFixed(2))
          backgrounds.push(this.getRandomColor()) ;
      
      
          labeles.push(key+ " :"+ value.toFixed(2)+ "%");
       
       
         
         
       
      }
      
      let datape = new dataPie ();
      datape.labels = labeles ;
      let pp = new Datasets ();
      pp.data = datanumber ;
      pp.backgroundColor = backgrounds ;
      let listdataset    : Datasets [] = [];
      listdataset.push(pp) ;
      datape.datasets = listdataset ;    
       
      
       
      
      
      this.data = datape
       
    
    this.chartCourrierFr =  new Chart(this.CourrierArPieUrlFr, {
        type: 'pie',
        data: {
          labels:labeles,
          datasets: [{
          
            backgroundColor:backgrounds,
            data: datanumber
          }]
        } ,
        options: {
          responsive: true,
          tooltips : {
            enabled  : true ,
            callbacks: {
              label: function(tooltipItem, data) {
                  var label = data.datasets[tooltipItem.datasetIndex].label || '';
    
                
                  label +=  data.labels[tooltipItem.index] 
                  return label;
              }
          }
          },
          title: {
            display: true,
            text: 'Courrier Arrivé' ,
            fontSize : 20
          },
          animation: {
            
            duration: 0 ,
           animateScale : true  ,
            animateRotate : true ,
       
        },
        
      responsiveAnimationDuration: 0, // animation duration after a resize
        }
    });
       
    this.chartCourrierFr.render();

      
                }, err => {
                  console.log(err);
            
                });
    }
    getdashbordDossierFr ( )
    { 
      
      this.dashboardService.getDahsboardDossierFr(this.commonService.getAffectPersonnelCurrentUser().idNmJurid).subscribe(data => {
        var     datase   :    Dataset  []  = [] ;
       
        let result = data ;
        let labeles  : string []  = [] ; 
      
     
       let datanumber : number [] = [];
         let backgrounds  : string []  = [] ; 
        for (const [key, value] of Object.entries(result)) { 
         
          let p = new Datasets();
          datanumber.push(value.toFixed(2))
          backgrounds.push(this.getRandomColor()) ;
      
      
          labeles.push(key+ " :"+ value.toFixed(2)+ "%");
       
       
         
         
       
      }
      
      let datape = new dataPie ();
      datape.labels = labeles ;
      let pp = new Datasets ();
      pp.data = datanumber ;
      pp.backgroundColor = backgrounds ;
      let listdataset    : Datasets [] = [];
      listdataset.push(pp) ;
      datape.datasets = listdataset ;    
       
      
       
      
      
      this.data = datape
       
    
    this.chartDossierFr =  new Chart(this.DossierArPieUrlFr, {
        type: 'pie',
        data: {
          labels:labeles,
          datasets: [{
          
            backgroundColor:backgrounds,
            data: datanumber
          }]
        } ,
        options: {
          responsive: true,
          tooltips : {
            enabled  : true ,
            callbacks: {
              label: function(tooltipItem, data) {
                  var label = data.datasets[tooltipItem.datasetIndex].label || '';
    
                
                  label +=  data.labels[tooltipItem.index] 
                  return label;
              }
          }
          },
          title: {
            display: true,
            text: 'Affaires',
            fontSize : 20
          },
          animation: {
            
            duration: 0 ,
           animateScale : true  ,
            animateRotate : true ,
       
        },
        
      responsiveAnimationDuration: 0, // animation duration after a resize
        }
    });
       
    this.chartDossierFr.render();

      
                }, err => {
                  console.log(err);
            
                });
    }
    getdashbordDossierAr ( )
    { 
      
      this.dashboardService.getDahsboardDossierAr(this.commonService.getAffectPersonnelCurrentUser().idNmJurid).subscribe(data => {
        var     datase   :    Dataset  []  = [] ;
       
        let result = data ;
        let labeles  : string []  = [] ; 
      
     
       let datanumber : number [] = [];
         let backgrounds  : string []  = [] ; 
        for (const [key, value] of Object.entries(result)) { 
         
          let p = new Datasets();
          datanumber.push(value.toFixed(2))
          backgrounds.push(this.getRandomColor()) ;
      
      
          labeles.push(key+ " :"+ value.toFixed(2)+ "%");
       
       
         
         
       
      }
      
      let datape = new dataPie ();
      datape.labels = labeles ;
      let pp = new Datasets ();
      pp.data = datanumber ;
      pp.backgroundColor = backgrounds ;
      let listdataset    : Datasets [] = [];
      listdataset.push(pp) ;
      datape.datasets = listdataset ;    
       
      
       
      
      
      this.data = datape
       
    
    this.chartDossierAr =  new Chart(this.DossierArPieUrlAr, {
        type: 'pie',
        data: {
          labels:labeles,
          datasets: [{
          
            backgroundColor:backgrounds,
            data: datanumber
          }]
        } ,
        options: {
          responsive: true,
          tooltips : {
            enabled  : true ,
            callbacks: {
              label: function(tooltipItem, data) {
                  var label = data.datasets[tooltipItem.datasetIndex].label || '';
    
                
                  label +=  data.labels[tooltipItem.index] 
                  return label;
              }
          }
          },
          title: {
            display: true,
            text: 'طور القضايا',
            fontSize : 20
          },
          animation: {
            
            duration: 0 ,
           animateScale : true  ,
            animateRotate : true ,
       
        },
        
      responsiveAnimationDuration: 0, // animation duration after a resize
        }
    });
       
    this.chartDossierAr.render();

      
                }, err => {
                  console.log(err);
            
                });
    }
    getRandomColor(): string {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
      }
}
