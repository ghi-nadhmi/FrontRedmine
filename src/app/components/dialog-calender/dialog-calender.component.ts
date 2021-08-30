import { data } from './../../shared/data/smart-data-table';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { SallesService } from '@app/shared/services/nomenclature/salles.service';
import { ToastrService } from 'ngx-toastr';
import { CONSTANTE_WS, VAffectationPersonnel, CommonService } from '@app/shared';
import { EntitesService } from '@app/shared/services/nomenclature/entites.service';



export interface data {
  capacite: number;
  selectedSalle: any;
  selectedEntity: any;
}

@Component({
  selector: 'app-dialog-calender',
  templateUrl: './dialog-calender.component.html',
  styleUrls: ['./dialog-calender.component.scss']
})

export class DialogCalenderComponent implements OnInit {
  currentLang: string;
  listSalle: any;
  listEntity: any;

  affectationPersonnel: VAffectationPersonnel;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA)
    public data: data,
    private translate: TranslateService,
    public dialog: MatDialogRef<DialogCalenderComponent>,
    private sallesService: SallesService,
    private entitesService: EntitesService,
    private toastr: ToastrService,
    private commonService: CommonService,
  ) {
    this.translate.onDefaultLangChange.subscribe((language) => {
      this.currentLang = language.lang;
    });
  }

  ngOnInit() {
    this.currentLang = this.translate.getDefaultLang();
    this.affectationPersonnel = this.commonService.getAffectPersonnelCurrentUser();
    this.listSalle = [];
    this.listEntity = [];


    this.listSalle = this.sallesService.getListSalleForCombo(this.affectationPersonnel.idNmJurid).subscribe(
      response => {
        if (response['code'] === CONSTANTE_WS.SUCCESS) {
          this.listSalle = response['payload'];
        }
      },
      error => {
        this.toastr.error(this.translate.instant('message.error.intern'), '');
      }
    )


    this.listEntity = this.entitesService.getListEntiteForCombo(this.affectationPersonnel.idNmJurid).subscribe(
      response => {
        if (response['code'] === CONSTANTE_WS.SUCCESS) {
          this.listEntity = response['payload'];
        }
      },
      error => {
        this.toastr.error(this.translate.instant('message.error.intern'), '');
      }
    )

  }

  close() {
    this.dialog.close()

  }
  save() {

  }
}
