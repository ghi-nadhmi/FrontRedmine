import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIComponentsRoutingModule } from './ui-components-routing.module';
import {SelectDateComponent} from '@app/components/select-date/select-date.component';
import {MatInputModule} from '@angular/material/input';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {BidiModule} from '@angular/cdk/bidi';
import {MatIconModule} from '@angular/material/icon';
import {PersonnePhysiqueComponent} from '@app/components/personnePhysique/personne-physique.component';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {TestListComponent } from './test-list/test-list.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
 
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './personnePhysique/dialog/dialog.component';
 
import {MatTabsModule} from '@angular/material/tabs';
 

import { MatRadioModule } from '@angular/material/radio';
 
import localeAr from '@angular/common/locales/ar-TN';
import localeFr from '@angular/common/locales/fr';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { registerLocaleData } from '@angular/common';
import { DialogCalenderComponent } from './dialog-calender/dialog-calender.component';
import { CalendarComponent } from './calendar/calendar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import {BreadcrumbModule} from 'angular-crumbs';
import { CalendarTestComponent } from './calendar-test/calendar-test.component';
import { DialogTestCalendarComponent } from './dialog-test-calendar/dialog-test-calendar.component' ;
import { PagintorService } from '@app/shared/services/PaginatorService/pagintor.service';



registerLocaleData(localeAr);
registerLocaleData(localeFr);
@NgModule({
    exports: [
        SelectDateComponent,
        PersonnePhysiqueComponent,
        TestListComponent,
         
        
        BreadcrumbComponent,
        CalendarComponent,
        CalendarTestComponent
        
    ],
    imports: [
        CommonModule,
        UIComponentsRoutingModule,
        FormsModule,
        BreadcrumbModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        BidiModule,
        MatIconModule,
        TranslateModule,
        MatExpansionModule,
        MatTableModule,
        MatToolbarModule,
        MatDividerModule,
        MatSelectModule,
        MatRadioModule,
        MatButtonModule,
        MatPaginatorModule,
        MatDialogModule,
        MatTabsModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
          })

    ],
    declarations: [

        SelectDateComponent,
        PersonnePhysiqueComponent,
        TestListComponent,
        BreadcrumbComponent,
        
        DialogComponent,
         
        
        DialogCalenderComponent,
        CalendarComponent,
        CalendarTestComponent,
        DialogTestCalendarComponent
    ],
    providers:[
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
    entryComponents: [ DialogComponent ,DialogCalenderComponent,DialogTestCalendarComponent]

})
export class UIComponentsModule { }
