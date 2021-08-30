import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {Subscription} from 'rxjs';
import {LayoutService} from '@shared/services/layout.service';
import * as moment from 'moment';
import {CustomDateAdapter} from '@app/adapters/custom-date-adapter';
import {dateInput} from '@shared/utils/date';

@Component({
    selector: 'app-select-date',
    templateUrl: './select-date.component.html',
    styleUrls: ['./select-date.component.scss'],
    providers: [
        {
            provide: DateAdapter,
            useClass: CustomDateAdapter,
            deps: [MAT_DATE_LOCALE],
        },
        {
            provide: MAT_DATE_FORMATS,
            useValue: {
                parse: {
                    dateInput: ['YYYY-MM-DD HH:mm:ss.S', 'l', 'LL', moment.ISO_8601],
                },
                display: {
                    dateInput: 'DD–MM–YYYY',
                    monthYearLabel: 'MMM YYYY',
                    dateA11yLabel: 'LL',
                    monthYearA11yLabel: 'MMMM YYYY',
                },
            },
        },
    ]
})
export class SelectDateComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    @Input() min?: any;
    @Input() max?: any;
    @Input() control: FormControl;
    @Input() label: string;
    @Input() isrequied = false
    dir: string;
    @Input() isError = false;
    @Input() msgError?: string;
    currentLang: string;
    @Input() readOnly: boolean = false;

    // datePickerValue: Date;

    // @ViewChild('inputDate', { static: false }) inputDate: ElementRef;

    // @ViewChild('datepickerInput', {static: false}) datepickerInput: ElementRef;

    constructor(
        private translate: TranslateService,
        private dateAdapter: DateAdapter<Date>,
    ) {
        this.currentLang = this.translate.getDefaultLang();
        this.translate.onDefaultLangChange.subscribe((language) => {
            this.currentLang = language.lang;
            this.dir = language.lang === 'ar' ? 'rtl' : 'ltr';
            //this.dateAdapter.setLocale(language.lang === 'ar' ? 'ar-LY' : 'fr');
            this.dateAdapter.setLocale(language.lang === 'ar' ? 'ar-tn' : 'fr');
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        
    }

    ngOnInit() {
        // console.log('this.dateval')
        // tslint:disable-next-line:max-line-length
        // this.currentLang === 'ar' ? this.datepickerInput.nativeElement.value = dte.getFullYear() + '/' + dte.getMonth() + '/' + dte.getDate() :
        //     this.datepickerInput.nativeElement.value = dte.getDate() + '/' + dte.getMonth() + '/' + dte.getFullYear();

    }

    ngOnDestroy() {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            const curDefaultLang = this.translate.getDefaultLang();
            this.dir = curDefaultLang === 'ar' ? 'rtl' : 'ltr';

            // moment.locale(curDefaultLang === 'ar' ? 'ar' : 'fr');
            //this.dateAdapter.setLocale(curDefaultLang === 'ar' ? 'ar-ly' : 'fr');
            this.dateAdapter.setLocale(curDefaultLang === 'ar' ? 'ar-tn' : 'fr');
            // this.dateAdapter.format()
            // this.dateAdapter.setLocale(curDefaultLang === 'fr' ? 'fr-fr' : 'ar-LY');

            // this.printValue();
        }, 0);
    }

    clear(mouseEvent: MouseEvent) {
        mouseEvent.stopPropagation();
        this.control.setValue(undefined);
    }

}
