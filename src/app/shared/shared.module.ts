import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

// COMPONENTS
import { FooterComponent } from '@shared/footer';
import { NavbarComponent } from '@shared/navbar';
import { SidebarComponent } from '@shared/sidebar';
import { CustomizerComponent } from '@shared/customizer';
import { NotificationSidebarComponent } from '@shared/notification-sidebar';

// DIRECTIVES
import { ToggleFullscreenDirective } from '@shared/directives';
import { SidebarDirective } from '@shared/directives';
import { SidebarLinkDirective } from '@shared/directives';
import { SidebarListDirective } from '@shared/directives';
import { SidebarAnchorToggleDirective } from '@shared/directives';
import { SidebarToggleDirective } from '@shared/directives';
import { HighlightTextPipe } from './pipes/highlight-text.pipe';
import { BreadcrumbComponent } from '@app/components/breadcrumb/breadcrumb.component';
import { UIComponentsModule } from '@app/components/ui-components.module';




@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        CustomizerComponent,
        NotificationSidebarComponent,
        ToggleFullscreenDirective,
        SidebarDirective,
        NgbModule,
        TranslateModule,
        HighlightTextPipe
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        TranslateModule,
        PerfectScrollbarModule,
        UIComponentsModule
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        CustomizerComponent,
        NotificationSidebarComponent,
        //BreadcrumbComponent,
        ToggleFullscreenDirective,
        SidebarDirective,
        SidebarLinkDirective,
        SidebarListDirective,
        SidebarAnchorToggleDirective,
        SidebarToggleDirective,
        HighlightTextPipe
    ]
})
export class SharedModule { }
