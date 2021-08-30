import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestRoutingModule} from '@pages/test/test-routing.module';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {UIComponentsModule} from '@app/components/ui-components.module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ThirdComponent } from './third/third.component';

@NgModule({
    declarations: [
        FirstComponent,
        SecondComponent,
        ThirdComponent,
    ],
    imports: [
        CommonModule,
        TestRoutingModule,
        UIComponentsModule,
        MatFormFieldModule,
        MatInputModule
    ],
})
export class TestModule {
}
