import { NgModule } from '@angular/core';

import { ChartistModule } from 'ng-chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DashboardComponent} from '@app/dashboard/dashboard.component';
import {MatchHeightModule} from '@app/shared';
import {DashboardRoutingModule} from '@app/dashboard/dashboard-routing.module';
import {CommonModule} from '@angular/common';
import {UIComponentsModule} from "@app/components/ui-components.module";
import { ChartsModule } from 'ng2-charts';
import { MatPaginatorIntl } from '@angular/material';
import { PagintorService } from '@app/shared/services/PaginatorService/pagintor.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';




@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ChartistModule,
        ChartsModule ,
        NgbModule,
        MatchHeightModule,
        UIComponentsModule ,
        TranslateModule,

    ],
    exports: [],
    declarations: [
        DashboardComponent,
    ],
    providers: [
        {
            provide: MatPaginatorIntl,
      
            useFactory: (translate) => {
              const service = new PagintorService();
              service.injectTranslateService(translate);
      
              return service;
            },
            deps: [TranslateService],
          },

    ],
})
export class DashboardModule { }
