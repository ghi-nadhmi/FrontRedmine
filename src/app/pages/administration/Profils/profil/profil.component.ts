import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
 
import { CONSTANTE_SQL, CriteriaSearch, SearchObject, SearchObjectTreatment } from '@app/shared';
import { TAdmProfile } from '@app/shared/entites/administration/TAdmProfile';
import { AdmProfileService } from '@app/shared/services/administration/admProfile.service';
 
import { ConfigService } from '@app/shared/services/config.service';
import { LayoutService } from '@app/shared/services/layout.service';
import { TranslateService } from '@ngx-translate/core';
import { ProfilModule } from '../profil.module';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  searchObject: SearchObject;
  displayedColumns: string[] = ['code', 'libelle', 'action'];
  datasource: any;
  rows = [];
  id:any
  countPage: Number;
  currentLang: any;
  formProfilSearch: FormGroup;
  selectedRow: any;
  temp = [];
  public config: any = {};
  constructor(
    public profilService: AdmProfileService,
    private searchObjectTreatment: SearchObjectTreatment,

    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private layoutService: LayoutService,
    private configService: ConfigService, private router: Router



  ) {

    this.translate.onDefaultLangChange.subscribe((language) => {
      console.log(this.translate.getDefaultLang() + ' vs' + language.lang);
      this.currentLang = language.lang;
    });


  }

  ngOnInit() {
    this.config = this.configService.templateConf;
    this.currentLang = this.config.layout.dir === 'rtl' ? 'ar' : 'fr';
    console.log("curent languague list profil on NgIn",this.currentLang);
    this.searchObject = this.searchObjectTreatment.treatementSearchObject(10, 0, null, null);
    this.initDatatable();

    this.formProfilSearch = this.formBuilder.group({
      code: [null],
      libelle: [null],
      flgActif: [null]
    })
  }

  search() {
    console.log("test", (this.formProfilSearch.get('flgActif').value))

    this.searchObject.pagination.offSet = 0;
    this.searchObject.pagination.limit = 10;
    this.searchObject.dataSearch = [];


    if (this.formProfilSearch.get('code').value !== undefined && this.formProfilSearch.get('code').value !== '' && this.formProfilSearch.get('code').value !== null) {
      this.searchObject.dataSearch.push(new CriteriaSearch('code', (this.formProfilSearch.get('code').value).toString(),
        CONSTANTE_SQL.UPPER_LIKE
      )
      );
      console.log("resultat", this.searchObject.dataSearch)
    }

    if (this.formProfilSearch.get('flgActif').value !== undefined && this.formProfilSearch.get('flgActif').value !== '' && this.formProfilSearch.get('flgActif').value !== null) {
      this.searchObject.dataSearch.push(new CriteriaSearch('flgActif', this.formProfilSearch.get('flgActif').value.toString(),
        CONSTANTE_SQL.EQUALS
      )
      );
      console.log("resultat", this.searchObject.dataSearch)
    }

    if (this.formProfilSearch.get('libelle').value !== undefined && this.formProfilSearch.get('libelle').value !== '' && this.formProfilSearch.get('libelle').value !== null && this.currentLang === 'ar') {
      this.searchObject.dataSearch.push(new CriteriaSearch('libelleAr', (this.formProfilSearch.get('libelle').value).toString(),
        CONSTANTE_SQL.UPPER_LIKE
      )
      );
      console.log("resultat", this.searchObject.dataSearch)
    }

    if (this.formProfilSearch.get('libelle').value !== undefined && this.formProfilSearch.get('libelle').value !== '' && this.formProfilSearch.get('libelle').value !== null && this.currentLang === 'fr') {
      this.searchObject.dataSearch.push(new CriteriaSearch('libelleFr', (this.formProfilSearch.get('libelle').value).toString(),
        CONSTANTE_SQL.UPPER_LIKE
      )
      );
      console.log("resultat", this.searchObject.dataSearch)

    }
    console.log("resultat", this.searchObject.dataSearch)



    this.initDatatable();


  }

  initDatatable() {
    this.profilService.getListProfil(this.searchObject).subscribe(
      response => {

        if (response['code'] === '200') {
          this.countPage = response['payload']['total'];
          this.rows = response['payload']['data'];



          this.datasource = new MatTableDataSource<TAdmProfile[]>(
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
  redirectFicheProfil() {

    this.router.navigateByUrl('/administration/ficheprofil');
  }



  editProfil(element) {
    this.id=element.id
    console.log('rrr',this.id)
    this.profilService.idProfil = element.id;
    
    sessionStorage.setItem('idProfil' ,(this.profilService.idProfil).toString() )
    this.router.navigateByUrl('/administration/editprofil');
  }


  onDelete(element) {
    console.log("hama")
    this.profilService.deleteAdmProfilById(element.id)
      .subscribe(data => {
        console.log("deleteAdmFoncProfil")
        this.initDatatable();

      }, err => {
        console.log(err);
      })
      ;

     
  }
}
