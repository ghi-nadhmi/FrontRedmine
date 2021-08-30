import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AccountService } from '@app/shared/services';
import { ConfigService } from '@app/shared/services/config.service';
import { LayoutService } from '@app/shared/services/layout.service';
import { TranslateService } from '@ngx-translate/core';


export class MEnuIem {
  libAr: string;
  libFr: string;
  path: string;
  //chidlitems : MEnuIem[] ;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})



export class BreadcrumbComponent implements OnInit {

  name: string;
  @Input() menu: Array<Object> = [];
  @Input() parent_menu = '';
  @Input() breadcrumbs: Array<Object>;

  breadcrumbList: Array<any>;
  breadcrumbListMenu: Array<any> = [];
  currentLang: string;
  currentRoute: string = "";
  public config: any = {};
  listPath: any;

  breadCumbItemsList: any = [] ;
  ListBreadcumps: Array<MEnuIem> = [] ;
  currentUrl: string

  constructor(private router: Router, private translate: TranslateService, private configService: ConfigService,
    private layoutService: LayoutService, private accountService: AccountService) {
    this.currentLang = this.translate.getDefaultLang();
    this.translate.onDefaultLangChange.subscribe((language) => {
      this.currentLang = language.lang;
    });
      this.ListBreadcumps = JSON.parse(sessionStorage.getItem('breadCumbItemsList')) ;
      this.breadCumbItemsList = this.ListBreadcumps ;
  }

  ngOnInit() {

    this.config = this.configService.templateConf;

 
    this.layoutService.breadcumbsListEmitted$.subscribe((response) => {
      if (!(response.length === 1 && response[0].path === "")) {
         
        this.breadCumbItemsList = response;
        sessionStorage.setItem('breadCumbItemsList', JSON.stringify(this.breadCumbItemsList)) ; 
   
      }     
    })
  }

  emptyList()
 { 
   if (this.router.url === '/dashboard/dashboard'){
    this.breadCumbItemsList = [];
   }
   
 }

 


 

}