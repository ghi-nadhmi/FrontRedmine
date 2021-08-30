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


import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule, MatInputModule,   MatExpansionModule, MatCheckboxModule, MatSelectModule, MatRadioModule, MatFormFieldModule, MatTreeModule } from '@angular/material';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UIComponentsModule } from '@app/components/ui-components.module';
import { FicheUtilisateurComponent } from './fiche-utilisateur/fiche-utilisateur.component';
import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';


 


@NgModule({
    declarations:
      [
      UtilisateurComponent,
      FicheUtilisateurComponent
    
    ],
    imports: [
        CommonModule,
        UtilisateurRoutingModule,
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
        MatTreeModule ,

        MatInputModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatNativeDateModule,
        MatPaginatorModule,
    
        MatExpansionModule,
        MatCheckboxModule,
        MatSelectModule,
        MatRadioModule,
        MatFormFieldModule,
        MatButtonModule ,
        MatIconModule,
        UIComponentsModule


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

  export class UtilisateurModule { }



