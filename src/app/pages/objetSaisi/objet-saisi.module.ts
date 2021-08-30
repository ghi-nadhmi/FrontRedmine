import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatPaginatorIntl } from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PagintorService } from '@app/shared/services/PaginatorService/pagintor.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import {
    DateAdapter,
    MatNativeDateModule,
    MAT_DATE_FORMATS,
    MAT_DATE_LOCALE,
  } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import {SelectDateComponent} from '@app/components/select-date/select-date.component'
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule, MatInputModule, MatIconModule, MatExpansionModule, MatCheckboxModule, MatSelectModule, MatRadioModule, MatFormFieldModule, MatTabsModule, MatAutocompleteModule, MatDividerModule } from '@angular/material';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material'; 
import {MatButtonModule} from '@angular/material/button';

import { UIComponentsModule } from '@app/components/ui-components.module';

import { ObjetSaisiRoutingModule } from './objet-saisi-routing.module';
import { ObjetSaisiComponent } from './objet-saisi/objet-saisi.component';
import { AddEditObjetSaisiComponent } from './add-edit-objet-saisi/add-edit-objet-saisi.component';
import { DeleteObjetSaisiComponent } from './delete-objet-saisi/delete-objet-saisi.component';






@NgModule({
    declarations:
      [
           
        ObjetSaisiComponent,
        AddEditObjetSaisiComponent,
        DeleteObjetSaisiComponent

      ],
      
    imports: [
       
        CommonModule,
        MatRadioModule , 
        MatAutocompleteModule ,
        FormsModule,
        ReactiveFormsModule,
        NgxDatatableModule,
        NgbDatepickerModule,
        MatTableModule,
        TranslateModule,
        MatDatepickerModule,
        MatCardModule,
        MatToolbarModule,
        MatDialogModule,
        MatTabsModule ,
        MatInputModule,
        MatMomentDateModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatIconModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatSelectModule,
        MatRadioModule,
        MatFormFieldModule,
        MatButtonModule,
        MatDividerModule,
        ObjetSaisiRoutingModule,
        UIComponentsModule
       
      
        
 
         
    ],
    
    exports: [
      ObjetSaisiComponent,
      AddEditObjetSaisiComponent,
      DeleteObjetSaisiComponent
],

      providers: [ DatePipe ,
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
    entryComponents: [AddEditObjetSaisiComponent,DeleteObjetSaisiComponent]
  })

  export class ObjetSaisiModule  { }



