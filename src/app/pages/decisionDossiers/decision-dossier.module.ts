
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatPaginatorIntl } from '@angular/material/paginator';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatTableModule, MatDatepickerModule, MatInputModule, MatNativeDateModule,
  MatPaginatorModule, MatIconModule, MatExpansionModule, MatCheckboxModule, MatSelectModule,
  MatRadioModule, MatFormFieldModule, MatButtonModule, MatSortModule, MatCardModule, MatTabsModule, MatDialogRef, MAT_DIALOG_DATA
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UIComponentsModule } from '@app/components/ui-components.module';
import { EditorModule } from '@progress/kendo-angular-editor';
import { PagintorService } from '@app/shared/services/PaginatorService/pagintor.service';
import { DecisionDossierComponent } from './decision-dossier/decision-dossier.component';
import { DecisionDossierRoutingModule } from './decision-dossier-routing.module';


@NgModule({
  declarations: [
    DecisionDossierComponent
  ],
  imports: [  
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    DecisionDossierRoutingModule,
    MatTableModule,
    TranslateModule,
    MatDatepickerModule,
    MatCardModule,
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
    MatButtonModule,
    EditorModule,
    UIComponentsModule


  ],
  exports: [
    DecisionDossierComponent
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

    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }


  ],
  entryComponents: []
})

export class DecisionDossierModule { }
