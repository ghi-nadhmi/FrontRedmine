import { Component, OnInit, Input, ViewChild, OnDestroy, ElementRef, Renderer2, AfterViewInit, Output, EventEmitter } from "@angular/core";

import { Router, ActivatedRoute } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { customAnimations } from "../animations/custom-animations";
import { ConfigService } from '../services/config.service';
import { LayoutService } from '../services/layout.service';
import { Subscription } from 'rxjs';
import { AccountService } from '@app/shared/services';
export class MEnuIem {
  libAr: string;
  libFr: string;
  path: string;
  //chidlitems : MEnuIem[] ;
}

export class MenuRoute {
  liblleAr: string;
  libelleFr: string;
  path: string;
  children: MenuRoute[];
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  animations: customAnimations
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('toggleIcon', { static: false }) toggleIcon: ElementRef;
  @Output() sendDataToLayout = new EventEmitter();

  @Output() changed = new EventEmitter();

  items: MEnuIem;
  public MenuRoute: any[];
  public menuItems=[
    {
      "classMethod": "has-sub",
      "icon": "",
      "badgeClass": "badge badge-pill badge-danger float-right mr-1 mt-1",
      "title": "8100ADM",
      "titleFr": "Dashboard",
      "isExternalLink": false,
      "idAdmFunc": "8100ADM",
      "badge": "",
      "path": "",
      "labelTitleFr": "Dashboard",
      "submenu": [
        {
          "classMethod": "",
          "icon": "",
          "badgeClass": "",
          "title": "8110ADM",
          "titleFr": "Liste personnels",
          "isExternalLink": false,
          "idAdmFunc": "8110ADM",
          "badge": "",
          "path": "/pers/personnels",
          "labelTitleFr": "Administration locale ** Liste personnels",
          "submenu": [],
          "idParent": "8100ADM"
        },
        {
          "classMethod": "",
          "icon": "",
          "badgeClass": "",
          "title": "8120ADM",
          "titleFr": "Liste des projets",
          "isExternalLink": false,
          "idAdmFunc": "8120ADM",
          "badge": "",
          "path": "/nomenclature/entites",
          "labelTitleFr": "Administration locale ** Liste des entités",
          "submenu": [],
          "idParent": "8100ADM"
        },
       
        {
          "classMethod": "",
          "icon": "",
          "badgeClass": "",
          "title": "8140ADM",
          "titleFr": "Calendrier",
          "isExternalLink": false,
          "idAdmFunc": "8140ADM",
          "badge": "",
          "path": "/components/calendrier",
          "labelTitleFr": "Administration locale ** Calendrier",
          "submenu": [],
          
          "idParent": "8100ADM"
        }
      ],
      
    },
    {
      "classMethod": "has-sub",
      "icon": "",
      "badgeClass": "badge badge-pill badge-danger float-right mr-1 mt-1",
      "title": "8200ADM",
      "titleFr": "Administration",
      "isExternalLink": false,
      "idAdmFunc": "8200ADM",
      "badge": "",
      "path": "",
      "labelTitleFr": "Administration",
      "submenu": [
        {
          "classMethod": "",
          "icon": "",
          "badgeClass": "",
          "title": "8210ADM",
          "titleFr": "Profiles",
          "isExternalLink": false,
          "idAdmFunc": "8210ADM",
          "badge": "",
          "path": "/administration/profil",
          "labelTitleFr": "Administration ** Profiles",
          "submenu": [],
          
          "idParent": "8200ADM"
        },
       
      
       
      ],
       
    },
   
   
     
   
  ];
  depth: number;
  activeTitle: string;
  activeTitles: string[] = [];
  expanded: boolean;
  nav_collapsed_open = false;
  logoUrl = 'assets/img/redmine.png';
  public config: any = {};
  layoutSub: Subscription;
  currentLang: any;
  parentElemnt: any;

  @Output() ListMenuIemBradcumpsActuel: Array<Object>;
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private route: ActivatedRoute,
    public translate: TranslateService,
    private configService: ConfigService,
    private layoutService: LayoutService,
    private accountService: AccountService
  ) {
    if (this.depth === undefined) {
      this.depth = 0;
      this.expanded = true;
    }

    this.layoutSub = layoutService.customizerChangeEmitted$.subscribe(
      options => {
        if (options) {
          if (options.bgColor) {
            if (options.bgColor === 'white') {
              this.logoUrl = 'assets/img/redmine.png';
            } else {
              this.logoUrl = 'assets/img/redmine.png';
            }
          }

          if (options.compactMenu === true) {
            this.expanded = false;
            this.renderer.addClass(this.toggleIcon.nativeElement, 'ft-toggle-left');
            this.renderer.removeClass(this.toggleIcon.nativeElement, 'ft-toggle-right');
            this.nav_collapsed_open = true;
          }
          else if (options.compactMenu === false) {
            this.expanded = true;
            this.renderer.removeClass(this.toggleIcon.nativeElement, 'ft-toggle-left');
            this.renderer.addClass(this.toggleIcon.nativeElement, 'ft-toggle-right');
            this.nav_collapsed_open = false;
          }

        }
      });

    this.translate.onDefaultLangChange.subscribe((language) => {
      console.log(this.translate.getDefaultLang() + ' vs ' + language.lang);
      this.currentLang = language.lang;
    });

  }

  ngOnInit() {

    this.currentLang = this.translate.getDefaultLang();
    this.config = this.configService.templateConf;
    // block call menu from backend

    

    if (this.config.layout.sidebar.backgroundColor === 'white') {
      this.logoUrl = 'assets/img/redmine.png';
    } else {
      this.logoUrl = 'assets/img/redmine.png';
    }
    // this.getMenuRoute();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.config.layout.sidebar.collapsed != undefined) {
        if (this.config.layout.sidebar.collapsed === true) {
          this.expanded = false;
          this.renderer.addClass(this.toggleIcon.nativeElement, 'ft-toggle-left');
          this.renderer.removeClass(this.toggleIcon.nativeElement, 'ft-toggle-right');
          this.nav_collapsed_open = true;
        }
        else if (this.config.layout.sidebar.collapsed === false) {
          this.expanded = true;
          this.renderer.removeClass(this.toggleIcon.nativeElement, 'ft-toggle-left');
          this.renderer.addClass(this.toggleIcon.nativeElement, 'ft-toggle-right');
          this.nav_collapsed_open = false;
        }
      }
    }, 0);
  }

  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }

  toggleSlideInOut() {
    this.expanded = !this.expanded;
  }

  handleToggle(titles) {
    // debugger;
    this.menuItems[0].title;
    localStorage.setItem('menuCode', titles);

    console.log("testMenu", this.menuItems);
    this.activeTitles = titles;
    console.log("configure", this.activeTitles);
    console.log('first')
    // this.sendDataToNavbar.emit(titles) ;

    this.changed.emit(this.activeTitles);
  }

  // NGX Wizard - skip url change
  ngxWizardFunction(path: string) {
    if (path.indexOf('forms/ngx') !== -1) {
      this.router.navigate(['forms/ngx/wizard'], { skipLocationChange: false });
    }
  }


  getMenutem(item, niveau) {
    debugger ; 
    if (niveau === 0) {
      this.ListMenuIemBradcumpsActuel = [];
    } else if (niveau === 1 && this.ListMenuIemBradcumpsActuel.length === 2) {
      this.ListMenuIemBradcumpsActuel.pop();
    }
    let ite = new MEnuIem();
    ite.libAr = item.libelleAdmFunction;
    ite.libFr = item.libelleAdmFunction;
    ite.path = item.path;
    this.ListMenuIemBradcumpsActuel.push(ite);
    this.layoutService.emitBreadcumbListChange(this.ListMenuIemBradcumpsActuel);
   


    
    
  }
  
 /*  getMenuRoute() {

    debugger;

    let breadcrumblist: MenuRoute[] = [];
    for (var i = 0; i < this.menuItems.length; i++) {
      let menuIem: MenuRoute = new MenuRoute();
      menuIem.liblleAr = this.menuItems[i].labelTitleAr;
      menuIem.libelleFr = this.menuItems[i].labelTitleFr;
      menuIem.path = this.menuItems[i].path;
      menuIem.children = [];
      if (this.menuItems[i].submenu != null && this.menuItems[i].submenu.length > 0) {
        for (var j = 0; j < this.menuItems[i].submenu.length; j++) {
          let child: MenuRoute = new MenuRoute();


          child.liblleAr = this.menuItems[i].submenu[j].labelTitleAr;
          child.libelleFr = this.menuItems[i].submenu[j].labelTitleFr;
          child.path = this.menuItems[i].submenu[j].path;
          child.children = [];
          if (this.menuItems[i].submenu[j].submenu != null && (this.menuItems[i].submenu[j].submenu.length > 0)) {
            for (var k = 0; k < this.menuItems[i].submenu[j].submenu.length; k++) {

              let child2: MenuRoute = new MenuRoute();
              child2.liblleAr = this.menuItems[i].submenu[j].submenu[k].labelTitleAr;
              child2.libelleFr = this.menuItems[i].submenu[j].submenu[k].labelTitleFr;
              child2.path = this.menuItems[i].submenu[j].submenu[k].path;
              child2.children = [];
              child.children.push(child2);



            }

          }

          menuIem.children.push(child);

        }

      }
      ;
      breadcrumblist.push(menuIem);
    } this.layoutService.breadcrumblist = breadcrumblist;
    console.log("testLISTMenuBreadCumps", this.layoutService.breadcrumblist);
    return breadcrumblist;



  } */

}
