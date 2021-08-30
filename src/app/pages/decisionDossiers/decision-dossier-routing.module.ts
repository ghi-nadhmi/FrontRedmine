import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecisionDossierComponent } from './decision-dossier/decision-dossier.component';


const routes: Routes = [
    {
        path: '',
        children: [
          {
            path: 'decisionDossier',
            component: DecisionDossierComponent  ,
            data: {
              title: 'decision dossier Page'
             
            }
         }
    
        ]
      }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class DecisionDossierRoutingModule { }