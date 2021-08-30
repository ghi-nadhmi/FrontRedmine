import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonService, CONSTANTE_SQL, CriteriaSearch, SearchObject, SearchObjectTreatment, VAdmUser } from '@app/shared';
import { AdmUtilisateurService } from '@app/shared/services/administration/adm-utilisateur.service';
import { ConfigService } from '@app/shared/services/config.service';
import { LayoutService } from '@app/shared/services/layout.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  currentLang: any;
  searchObject: SearchObject;
  formUtilisateurSearch: FormGroup;
  public config: any = {};
  displayedColumns: string[] = ['utilisateur', 'name', 'mail', 'status', 'action'];
  datasource: any;
  rows = [];
  temp = [];
  countPage: Number;
  idPersonne: any;
  formpersonelSearch: FormGroup;
  constructor(private userService: AdmUtilisateurService,
    private searchObjectTreatment: SearchObjectTreatment,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private layoutService: LayoutService,
    private commonService: CommonService,
    private configService: ConfigService, private router: Router) {


    this.translate.onDefaultLangChange.subscribe((language) => {
      console.log(this.translate.getDefaultLang() + ' vs' + language.lang);
      this.currentLang = language.lang;
    });
  }

  ngOnInit() {
    this.config = this.configService.templateConf;
    this.currentLang = this.config.layout.dir === 'rtl' ? 'ar' : 'fr';
    this.searchObject = this.searchObjectTreatment.treatementSearchObject(10, 0, null, null);
    this.initDatatable();

    this.formUtilisateurSearch = this.formBuilder.group({
      utilisateur: [null],
      name: [null],
      mail: [null],
      status: ["1"],

    })
  }

  initDatatable() {
    debugger
    this.userService.getListUtilisateur(this.searchObject).subscribe(
      response => {

        if (response['code'] === '200') {
          this.countPage = response['payload']['total'];
          this.rows = response['payload']['data'];



          this.datasource = new MatTableDataSource<VAdmUser[]>(
            response['payload']['data']
          );

          console.log(this.datasource);
          this.temp = this.rows;
        }
      },
      error => {
        console.log('error :: ' + error);
      }
    )
  }

  redirectFicheUtilisateur() {

    this.router.navigateByUrl('/utilistaurs/ficheUtilisateur');
  }

  editUtilisateur(element) {

    this.userService.idUtilisateur = element.id;
    sessionStorage.setItem('idUtilisateur', (this.userService.idUtilisateur).toString())
    this.router.navigateByUrl('/utilistaurs/ficheUtilisateur');
  }

  public onReset() {
    this.searchObject = this.searchObjectTreatment.treatementSearchObject(10, 0, 'dtMaj', 'desc nulls last');
    this.searchObject.dataSearch = [];
    this.initSearch();
    this.initDatatable();
  }

  public initSearch() {
    this.initFormSearch();
  }

  public initFormSearch() {
    this.formUtilisateurSearch = this.formBuilder.group({
      utilisateur: [null],
      name: [null],
      mail: [null],
      status: ["1"],

    });
  }


  search() {

    this.searchObject.pagination.offSet = 0;
    this.searchObject.pagination.limit = 10;
    this.searchObject.dataSearch = [];


    if (this.formUtilisateurSearch.get('login').value !== undefined && this.formUtilisateurSearch.get('login').value !== '' && this.formUtilisateurSearch.get('login').value !== null) {
      this.searchObject.dataSearch.push(new CriteriaSearch('login', (this.formUtilisateurSearch.get('login').value).toString(),
        CONSTANTE_SQL.UPPER_LIKE
      )
      );

    }

    if (this.formUtilisateurSearch.get('mail').value !== undefined && this.formUtilisateurSearch.get('mail').value !== '' && this.formUtilisateurSearch.get('mail').value !== null) {
      this.searchObject.dataSearch.push(new CriteriaSearch('mail', (this.formUtilisateurSearch.get('mail').value).toString(),
        CONSTANTE_SQL.UPPER_LIKE
      )
      );

    }

    if (this.formUtilisateurSearch.get('flgActif').value !== undefined && this.formUtilisateurSearch.get('flgActif').value !== '' && this.formUtilisateurSearch.get('flgActif').value !== null) {
      this.searchObject.dataSearch.push(new CriteriaSearch('flgActif', this.formUtilisateurSearch.get('flgActif').value.toString(),
        CONSTANTE_SQL.EQUALS
      )
      );

    }



    if (this.formUtilisateurSearch.get('fullName').value !== undefined && this.formUtilisateurSearch.get('fullName').value !== '' && this.formUtilisateurSearch.get('fullName').value !== null) {
      this.searchObject.dataSearch.push(new CriteriaSearch('fullName', (this.formUtilisateurSearch.get('fullName').value).toString(),
        CONSTANTE_SQL.UPPER_LIKE
      )
      );

    }





    this.initDatatable();


  }



}
