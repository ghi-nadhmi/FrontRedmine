import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AuthentificationRoutingModule } from './authentification-routing.module';

import { ForgotPasswordPageComponent } from './forgot-password/forgot-password-page.component';
import { LoginPageComponent } from './login/login-page.component';
import { RegisterPageComponent } from './register/register-page.component';
import { SharedModule } from '@shared/shared.module';
import {TranslateModule} from "@ngx-translate/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
    imports: [
        CommonModule,
        AuthentificationRoutingModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ForgotPasswordPageComponent,
        LoginPageComponent,
        RegisterPageComponent
    ]
})
export class AuthentificationModule { }
