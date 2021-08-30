import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackOfficeComponent } from './back-office/back-office.component';
import { DetailProjectComponent } from './detail-project/detail-project.component';
import { AddEditEntiteComponent } from './entite/add-edit-entite/add-edit-entite.component';
import { EntiteComponent } from './entite/entite.component';
import { SalleComponent } from './salle/salle.component';


const routes: Routes = [
    {
        path: '',
        
        children: [
          {
            path: 'entites',
            component: EntiteComponent  ,
             
          },
          
          {
            path: 'backoffice',
            component: BackOfficeComponent  ,
            
          },
           {
             path: 'salles',
             component: SalleComponent  ,
             
           },

          {
            path: 'entites/add',
            component: AddEditEntiteComponent,
             
          },
        
          {
            path: 'detail',
            component:  DetailProjectComponent,
            
              
            }
           
    
         
    
        ]
      } ,
      
      

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NomenclatureRoutingModule { }