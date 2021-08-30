import { Component, Output, EventEmitter, OnDestroy, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from '../services/layout.service';
import { Subscription } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { Router } from '@angular/router';
import SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { AccountService, VAffectationPersonnel } from '@app/shared';
import { DateAdapter } from "@angular/material/core";
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../services/Notification/Notification.service';
import { CONSTANTE_NOTIFICATION_URL } from '../constante/constante_notification_url';
import { CONSTANTE, CONSTANTE_WS } from '../constante';
import { CommonService } from '../services';
import { BreadcrumbComponent } from '@app/components/breadcrumb/breadcrumb.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  toggleClass = 'ft-maximize';
  placement = 'bottom-right';
  public isCollapsed = true;
  layoutSub: Subscription;
  currentLang: string;
  //items: MenuItem[] = [];
 

  @Output() toggleHideSidebar = new EventEmitter<boolean>();
  @Output() sidebarDirectionEvent = new EventEmitter<string>();
  //@ViewChild('breadcrumbComponent', { static: false }) BreadcrumbComponent:BreadcrumbComponent;
 // @Input()  home: any;

  public config: any = {};
  userInfo: any;
  idConnectedUser: any;
  isCustomSocketOpened = false;
  private stompClient;
  isLoaded: boolean = false;
  public nbre = 0;
  messages: Message[] = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  notifications: Notification[];
  items: any;
  breadcrumbList: Array<any> = [];
  menu: Array<any> = [];

  affectationPersonnel = new VAffectationPersonnel();

  constructor(public translate: TranslateService,
    private layoutService: LayoutService,
    private configService: ConfigService,
    private router: Router,
    private accountService: AccountService,
    private dateAdapter: DateAdapter<any>,
    private toastr: ToastrService,
    private notificationService: NotificationService,
    private commonService: CommonService,private _router: Router
  ) {
    this.translate.onDefaultLangChange.subscribe((language) => {
      this.currentLang = language.lang;
    });
    this.layoutSub = layoutService.changeEmitted$.subscribe(
      direction => {
        const dir = direction.direction;
        if (dir === 'rtl') {
          this.placement = 'bottom-left';
        } else if (dir === 'ltr') {
          this.placement = 'bottom-right';
        }
      });
  }

  ngOnInit() {
    this.config = this.configService.templateConf;
    this.currentLang = this.config.layout.dir === 'rtl' ? 'ar' : 'fr';
     
   
   
  /*   this.menu= this.menuService.getMenu() ; 
    this.listenRouting() ;  */
    //this.home = {icon: 'fas fa-home' };
  }

  ngAfterViewInit() {
    if (this.config.layout.dir) {
      setTimeout(() => {
        const dir = this.config.layout.dir;
        if (dir === 'rtl') {
          this.placement = 'bottom-left';
        } else if (dir === 'ltr') {
          this.placement = 'bottom-right';
        }
      }, 0);

    }
  }

  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }

  ToggleClass() {
    if (this.toggleClass === 'ft-maximize') {
      this.toggleClass = 'ft-minimize';
    } else {
      this.toggleClass = 'ft-maximize';
    }
  }

  toggleNotificationSidebar() {
    this.layoutService.emitNotiSidebarChange(true);
  }

  toggleCustomizer() {
    this.layoutService.emitToggleCustomizerChange(false);
  }

  toggleSidebar() {
    const appSidebar = document.getElementsByClassName('app-sidebar')[0];
    if (appSidebar.classList.contains('hide-sidebar')) {
      this.toggleHideSidebar.emit(false);

    } else {
      this.toggleHideSidebar.emit(true);
    }
  }

  onChangeLanguage(language: string) {
    this.translate.setDefaultLang(language);
    let dir: string;
    dir = language === 'ar' ? 'rtl' : 'ltr';
    this.currentLang = dir === 'rtl' ? 'ar' : 'fr';
    this.sidebarDirectionEvent.emit(dir);
    this.layoutService.emitChange({ direction: dir });
    sessionStorage.setItem('direction', dir);
    sessionStorage.setItem('lang', this.currentLang);
  }

  logout() {
    this.accountService.logout();
  }

  getItems (items)
  { debugger ; 
   this.items = items;
   console.log("testitemsFarah",items)
  }

 /*  listenRouting() {
    debugger ; 
    let routerUrl: string, routerList: Array<any>, target: any;
    this._router.events.subscribe((router: any) => {
      routerUrl = router.urlAfterRedirects;
      if (routerUrl && typeof routerUrl === 'string') {
        target = this.menu;
        this.breadcrumbList.length = 0;
        routerList = routerUrl.slice(1).split('/');
        routerList.forEach((router, index) => {
        target = target.find(page => page.path.slice(2) === router);
          this.breadcrumbList.push({
            name: target.name,
            
            path: (index === 0) ? target.path : `${this.breadcrumbList[index-1].path}/${target.path.slice(2)}`
          });
          
          if (index+1 !== routerList.length) {
            target = target.children;
          }
        });

        console.log("testFarah", this.breadcrumbList);
      }
    });
  } */

  

  initListNotif(idConnectedUser: any) {
    this.notificationService.getListNotifByIdUser(this.idConnectedUser).subscribe(response => {
      if (response['code'] === '200') {
        this.notifications = response['payload'];
      }
      else { }
    });
  }

  initnumberNotifNotConsulted(idConnectedUser: any) {
    this.notificationService.getNumberNotifNotConsulted(this.idConnectedUser).subscribe(response => {
      if (response['code'] === '200') {
        this.nbre = response['payload'].numNotif;
      }
      else {
      }
    });
  }

  initializeWebSocketConnection() {
    let ws = new SockJS(CONSTANTE_NOTIFICATION_URL.SERVER_URL_SOCKET);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function (frame) {
      that.isLoaded = true;
      that.openSocket();
    });
  }


  openSocket() {
    if (this.isLoaded) {
      this.isCustomSocketOpened = true;
      this.stompClient.subscribe('/socket-publisher/' + this.idConnectedUser, (message) => {
        this.handleResult(message);
      });
    }
  }

  handleResult(message) {
    if (message.body) {
      this.initnumberNotifNotConsulted(this.idConnectedUser);
      this.initListNotif(this.idConnectedUser);
      if (this.currentLang == 'ar') {
        this.toastr.info('لقد تلقيت اشعارا جديدا', '', {
          'timeOut': 5000,
          positionClass: 'toast-top-right'
        });

      } else {
        this.toastr.info('vouz avez recu une nouvelle notification', '', {
          'timeOut': 5000,
          positionClass: 'toast-top-left'
        });
      }
    }
  }

 
}
