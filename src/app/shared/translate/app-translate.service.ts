import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import * as moment from 'moment';
//import {DateAdapter} from '@angular/material/core';


@Injectable({
  providedIn: 'root',
})
export class AppTranslateService {
  private key = 'PENAL_LANG';
  private language?: string;


  constructor(
    private translate: TranslateService,
   // private dateAdapter: DateAdapter<any>,
  ) {
  }

  setDefaultLang(lang: string) {
    window.localStorage.setItem(this.key, lang);
  }

  getDefaultLang() {
    return window.localStorage.getItem(this.key) || 'ar';
  }

  useLanguage(language?: 'fr' | 'ar') {
    const lang = language || this.getDefaultLang();
    this.language = lang;
    moment.locale(lang === 'ar' ? 'ar-tn' : lang);
   // this.dateAdapter.setLocale(lang === 'ar' ? 'ar-tn' : lang);
   console.log(lang,'servicelang')
    this.translate.use(lang);
    this.setDirection();
  }

  getDir(): 'rtl' | 'ltr' {
    return this.language === 'ar' ? 'rtl' : 'ltr';
  }

  private setDirection() {
    document.querySelector('html').setAttribute('dir', this.getDir());
  }

  get currentLanguage() {
    return this.translate.currentLang;
  }
}
