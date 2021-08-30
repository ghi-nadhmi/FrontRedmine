import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FirstComponent} from "@pages/test/first/first.component";
import {SecondComponent} from "@pages/test/second/second.component";
import {ThirdComponent} from "@pages/test/third/third.component";
import {PersonnePhysiqueComponent} from "@app/components/personnePhysique/personne-physique.component";
 


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'first',
        component: FirstComponent,
        data: {
          title: 'Currency Page'
        }
      },
      {
        path: 'second',
        component: SecondComponent,
        data: {
          title: 'Currency Page'
        }
      },
      {
        path: 'third',
        component: ThirdComponent,
        data: {
          title: 'Currency Page'
        }
      },
      {
        path: 'ppp',
        component: PersonnePhysiqueComponent,
        data: {
         
        }
      },
       
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
