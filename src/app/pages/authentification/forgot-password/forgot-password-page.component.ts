import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-forgot-password-page',
    templateUrl: './forgot-password-page.component.html',
    styleUrls: ['./forgot-password-page.component.scss']
})

export class ForgotPasswordPageComponent {
    @ViewChild('f', {static: false}) forogtPasswordForm: NgForm;

    constructor(private router: Router,
        private route: ActivatedRoute) { }

    // On submit click, reset form fields
    onSubmit() {
        this.forogtPasswordForm.reset();
    }

}
