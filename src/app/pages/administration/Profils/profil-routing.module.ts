import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { FicheProfilComponent } from './fiche-profil/fiche-profil.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
 
 


const routes: Routes = [
    {
        path: '',
        children: [
          {
            path: 'profil',
            component: ProfilComponent  ,
            data: {
              title: 'Access Data Page'
            }

          },

          {
            path: 'ficheprofil',
            component: FicheProfilComponent  ,
            data: {
              title: 'Access Data Page'
            }
          }, 


          {
            path: 'editprofil',
            component: EditProfilComponent,
            data: {
              title: 'Access Data Page'
            }
          } 

        
         
    
         
    
        ]
      }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilRoutingModule { }