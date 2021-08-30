import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FicheUtilisateurComponent } from './fiche-utilisateur/fiche-utilisateur.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';


 
 


const routes: Routes = [
    {
        path: '',
        children: [
          {
            path: 'utilisateur',
            component: UtilisateurComponent  ,
            data: {
              title: 'Access Data Page'
            }

          },

          {
            path: 'ficheUtilisateur',
            component: FicheUtilisateurComponent,
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
export class UtilisateurRoutingModule { }