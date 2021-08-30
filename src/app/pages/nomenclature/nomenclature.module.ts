import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import { EntiteComponent } from './entite/entite.component';

import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule, MatInputModule, MatIconModule, MatExpansionModule, MatCheckboxModule, MatSelectModule, MatRadioModule, MatFormFieldModule } from '@angular/material';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NomenclatureRoutingModule } from '../nomenclature/nomenclature-routing.module';
import { AddEditEntiteComponent } from './entite/add-edit-entite/add-edit-entite.component';
import { DeleteEntiteComponent } from './entite/delete-entite/delete-entite.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material';
import { SalleComponent } from './salle/salle.component';
import { AddEditSalleComponent } from './salle/add-edit-salle/add-edit-salle.component';
import { DeleteSalleComponent } from './salle/delete-salle/delete-salle.component';
import {MatButtonModule} from '@angular/material/button';
 import {BackOfficeComponent} from './back-office/back-office.component';



 import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {A11yModule} from '@angular/cdk/a11y';
// import { TreetableModule } from 'ng-material-treetable';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatDividerModule,
  MatGridListModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTabsModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { DetailProjectComponent } from './detail-project/detail-project.component';
import { TrackerComponent } from './tracker/tracker.component';


@NgModule({
    declarations:
      [
        EntiteComponent,
        AddEditEntiteComponent,
        DeleteEntiteComponent,
        SalleComponent,
        AddEditSalleComponent,
        DeleteSalleComponent,
        BackOfficeComponent,
        DetailProjectComponent,
        TrackerComponent
      ],exports: [
        A11yModule,
        CdkTableModule,
        CdkTreeModule,
        DragDropModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        ScrollingModule,
      ],
    imports: [
        CommonModule,
        NomenclatureRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        // DataTablesModule,
        NgxDatatableModule,
        NgbDatepickerModule,
        MatTableModule,
        TranslateModule,
        MatDatepickerModule,
        MatCardModule,
        MatToolbarModule,
        MatDialogModule,
        // TreetableModule,
        MatInputModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatIconModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatSelectModule,
        MatRadioModule,
        MatFormFieldModule,
        MatButtonModule


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
        
   
      //   { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
      // { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
      // { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    
      ],
      entryComponents: [AddEditEntiteComponent,DeleteEntiteComponent,AddEditSalleComponent,DeleteSalleComponent]
  })

  export class NomenclatureModule { }



