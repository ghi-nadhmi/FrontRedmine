import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { CommonService, SearchObjectTreatment, TAdmPersonnel } from '@app/shared';
import { AdmUtilisateurService } from '@app/shared/services/administration/adm-utilisateur.service';
import { ConfigService } from '@app/shared/services/config.service';
import { LayoutService } from '@app/shared/services/layout.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fiche-utilisateur',
  templateUrl: './fiche-utilisateur.component.html',
  styleUrls: ['./fiche-utilisateur.component.scss']
})
export class FicheUtilisateurComponent implements OnInit {
  currentLang: string;
  listPersonnels: TAdmPersonnel[];
  constructor(public utilisateurService: AdmUtilisateurService,
    private toastr: ToastrService,
    private searchObjectTreatment: SearchObjectTreatment,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private layoutService: LayoutService,
    private configService: ConfigService,
    private router: Router,
    private commonService: CommonService) {
      
      this.currentLang = this.translate.getDefaultLang();
  
      this.translate.onDefaultLangChange.subscribe((language) => {
        console.log(this.translate.getDefaultLang() + ' vs ' + language.lang);
        this.currentLang = language.lang;
      });}

  ngOnInit() {
  }


  getListPersonnels() {
    this.utilisateurService.getListPersonnel().subscribe(
      response => {
       
        if (response['code'] === '200') {


          this.listPersonnels =
            response['payload']

        }
      },
      error => {
        console.log('error :: ' + error);
      }
    )
  }
}
