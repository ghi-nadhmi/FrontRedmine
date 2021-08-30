import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';

import {FullLayoutComponent} from './layouts/full/full-layout.component';
import {ContentLayoutComponent} from './layouts/content/content-layout.component';

import {Full_ROUTES} from '@app/shared';
import {CONTENT_ROUTES} from '@app/shared';

import {AuthGuard} from '@app/shared';
import {NonAuthGuard} from '@app/shared';
import {SelectDateComponent} from "@app/components/select-date/select-date.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'authentification/login',
        pathMatch: 'full',
        canActivate: [NonAuthGuard]
    },
    {
        path: 'home',
        redirectTo: 'dashboard/dashboard',
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    // {path: '', component: SelectDateComponent, canActivate: [AuthGuard]},
    {path: '', component: FullLayoutComponent, data: {title: 'full Views'}, children: Full_ROUTES, canActivate: [NonAuthGuard]},
    {path: '', component: ContentLayoutComponent, data: {title: 'content Views'}, children: CONTENT_ROUTES, canActivate: [NonAuthGuard]},
    {
        path: '**',
        redirectTo: 'pages/error'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
