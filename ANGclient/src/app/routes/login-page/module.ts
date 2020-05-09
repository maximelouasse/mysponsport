/*
Imports
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    // Inner
    import { Routing } from './router';
    import { LoginPageComponent } from './login-page.component';
    import { FormLoginModule } from "../../shared/form-login/module";
//

/*
Definition
*/
    @NgModule({
        declarations: [ LoginPageComponent ],
        imports: [
            CommonModule,
            Routing,
            FormLoginModule
        ]
    })
//


/*
Export
*/
    export class Module {};
//
