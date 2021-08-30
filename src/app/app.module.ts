import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from '@shared/shared.module';
import {ToastrModule} from 'ngx-toastr';
import {AgmCoreModule} from '@agm/core';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {StoreModule} from '@ngrx/store';

import {
    PerfectScrollbarModule,
    PERFECT_SCROLLBAR_CONFIG,
    PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';

import {AppComponent} from './app.component';
import {ContentLayoutComponent} from './layouts/content/content-layout.component';
import {FullLayoutComponent} from './layouts/full/full-layout.component';
import {HeaderHttpInterceptor} from '@app/shared';


import {DragulaService} from 'ng2-dragula';
import {AuthGuard} from '@app/shared';
import {NonAuthGuard} from '@app/shared';

import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {CustomDateAdapter} from "@app/adapters/custom-date-adapter";
import * as moment from "moment";
import {dateInput} from "@shared/utils/date";
import {UIComponentsModule} from "@app/components/ui-components.module";
import {MatPaginatorIntl} from "@angular/material/paginator";
import {PagintorService} from "@shared/services/PaginatorService/pagintor.service";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutService } from './shared/services/layout.service';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { EditorModule } from '@progress/kendo-angular-editor';











const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelPropagation: false
};

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        FullLayoutComponent,
        ContentLayoutComponent
       
       


    ],
    imports: [
        BrowserAnimationsModule,
  
        StoreModule.forRoot({}),
        AppRoutingModule,
        SharedModule,
        //BreadcrumbModule,
        DragDropModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        NgbModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        TranslateModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR KEY'
        }),
        PerfectScrollbarModule,
        UIComponentsModule,
        DateInputsModule,
        EditorModule,
      
    ],
    exports: [],

    providers: [
        NonAuthGuard,
        AuthGuard,
        DragulaService,
        LayoutService,
        {

            provide: MatPaginatorIntl,


            useFactory: (translate) => {

                const service = new PagintorService();

                service.injectTranslateService(translate);


                return service;

            },

            deps: [TranslateService],

        },
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        {provide: HTTP_INTERCEPTORS, useClass: HeaderHttpInterceptor, multi: true},
        {provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG},


    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
