import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AlertService } from '../../../shared/services';
import { AccountService } from '@app/shared';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from '@shared/services/layout.service';
import { ConfigService } from '@shared/services/config.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit, OnDestroy {

    public loginForm: FormGroup;
    // @ViewChild('languageSelector', {static: false}) languageSelector: ElementRef;
    public currentLang: string;
    config: any;
    userInfo: any;
    username = ''
     password = ''
    invalidLogin = false

    // @Output() directionEvent = new EventEmitter<string>();

 
    constructor(
        private route: ActivatedRoute,
        private renderer: Renderer2,
        private toastr: ToastrService,
        private router: Router,
        private accountService: AccountService,
        public translate: TranslateService,
        private layoutService: LayoutService,
        private configService: ConfigService,
        private loginservice: AccountService
        
    ) {

    }

    ngOnInit() {
        this.config = this.configService.templateConf;
        this.currentLang = this.config.layout.dir === 'ltr' ? 'fr' : 'fr';
        sessionStorage.setItem('lang', this.currentLang);
        // this.onChangeLanguage(this.currentLang);

        sessionStorage.removeItem('token');
        this.renderer.addClass(document.querySelector('app-root'), 'app-login-page');
         
        this.loginForm = new FormGroup({
            username: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
        });
            

    }

    ngAfterViewInit() {
        if (this.config.layout.dir) {
            setTimeout(() => {
                this.onChangeLanguage(this.currentLang);
            }, 0);

        }
    }

    get f() {
        return this.loginForm.controls;
    }

    // On submit button click
    login() {
        sessionStorage.removeItem('token');
        sessionStorage.clear;
        if (this.loginForm.invalid) {
            return;
        }

         
        this.loginForm.reset();

    }
    whoami() {
        
    // On Forgot password link click
     
    }
    checkLogin() {
        if (this.loginservice.authenticate(this.username, this.password)
        ) {
          this.router.navigate(['/home'])
          this.invalidLogin = false
        } else
          this.invalidLogin = true
      }
    // // On registration link click
    // onRegister() {
    //     this.router.navigate(['register'], { relativeTo: this.route.parent });
    // }


    ngOnDestroy() {
        this.renderer.removeClass(document.querySelector('app-root'), 'app-login-page');
    }

    sendOptions(dir: string) {
        this.layoutService.emitChange({ direction: dir });
        this.configService.setDirection(dir);
        sessionStorage.setItem('direction', dir);
    }

    emitDirection(lang) {
        lang === 'ar' ? this.sendOptions('rtl') : this.sendOptions('ltr');
    }

    onChangeLanguage(lang) {
        this.currentLang = lang;
        this.translate.setDefaultLang(lang);
        this.emitDirection(this.currentLang);
    }

}
