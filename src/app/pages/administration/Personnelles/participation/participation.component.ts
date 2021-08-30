import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DetailProjectService } from '@app/shared/services/detail-project.service';
import { DetailuserService } from '@app/shared/services/detailuser.service';
import { ProjectbyIdService } from '@app/shared/services/projectby-id.service';
import { ProjectsService } from '@app/shared/services/projects.service';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.scss']
})
export class ParticipationComponent implements OnInit {
  
  IDu: any;
  IDp: any;
  data: any;
  nb=0 ;
  n =0;
  constructor(private Detail: DetailuserService, private ProjectByUser:  DetailProjectService, private issues: ProjectsService
    ,private dialogRef: MatDialogRef<ParticipationComponent>) {  }


  ngOnInit(): void {
     
    
    this.IDu = this.Detail.currentID;
    console.log(this.IDu);
    this.IDp = this.ProjectByUser.currentID;
    console.log(this.IDp);
    this.issues.getIssues().subscribe((result) => {
      console.log("result", result)
      this.data = result;
      for (let i = 0; i < this.data[0].issues.length; i++) {
      if(this.data[0].issues[i].project.id==this.IDp  )
       {  this.nb = this.nb+1 ;
          if(this.data[0].issues[i].assigned_to.id==this.IDu)
            {this.n=this.n+1 }
       }
      }
      var myChart = new Chart("myChart", {
        type: 'bar',
        data: {
          labels: ['rate' ],
          datasets: [{
            label: '# utilisateur '+String(this.Detail.currentName)+' participe '+String(this.ProjectByUser.currentName),
            data: [this.n*100/this.nb ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
               
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
               
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
  } ;
  
  onNoClick(): void {
    this.dialogRef.close();
}

}
