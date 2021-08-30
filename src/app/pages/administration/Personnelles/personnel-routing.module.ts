import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticipationComponent } from './participation/participation.component';
 
import { PersonnelComponent } from './personnel/personnel.component';
import { ProjectByUserComponent } from './project-by-user/project-by-user.component';

 
 


const routes: Routes = [
    {
        path: '',
        children: [
          {
            path: 'personnels',
            component: PersonnelComponent  ,
            data: {
              title: 'Access Data Page'
            }

          },
          {
            path: 'hisprojects',
            component: ProjectByUserComponent  ,
            data: {
              title: 'Access Data Page'
            }

          },
          {
            path: 'participation',
            component: ParticipationComponent  ,
            data: {
              title: 'Access Data Page'
            }

          },
           
        
         
    
         
    
        ]
      }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonnelRoutingModule { }