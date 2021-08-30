import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditObjetSaisiComponent } from './add-edit-objet-saisi/add-edit-objet-saisi.component';
import { DeleteObjetSaisiComponent } from './delete-objet-saisi/delete-objet-saisi.component';
import { ObjetSaisiComponent } from './objet-saisi/objet-saisi.component';



const routes: Routes = [
    {
        path: '',
        children: [
          {
            path: 'objectSaisiSave/addEdit',
            component: AddEditObjetSaisiComponent  ,
            data: {
              title: 'Access Data Page'
            
            }
        },

        {
          path: 'objectSaisiList',
          component: ObjetSaisiComponent ,
          data: {
           title: 'Log Data Page'
           
          }
        },

        {
            path: 'objectSaisiList/delete',
            component: DeleteObjetSaisiComponent ,
            data: {
             title: 'Log Data Page'
             
            }
          },
          
    ]
}

];
        
@NgModule({
imports: [RouterModule.forChild(routes)],
 exports: [RouterModule],
          })

export class ObjetSaisiRoutingModule {}  