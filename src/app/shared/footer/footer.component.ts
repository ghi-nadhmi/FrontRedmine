import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
    currentDate : Date = new Date();
    currentLang: string;

    constructor(
        private translate: TranslateService,
    ) {
        this.translate.onDefaultLangChange.subscribe((language) => {
            this.currentLang = language.lang;
        });
    }

    ngOnInit(): void {

    }
    
}
