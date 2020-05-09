/*
Imports
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { HttpClientModule } from '@angular/common/http';
    import { CommonModule } from '@angular/common';
    import { RouterModule } from "@angular/router";

    // Inner
    import { ProfilePageComponent } from "./profile-page.component";
//


/*
Definition & export
*/
    @NgModule({
        declarations: [ ProfilePageComponent ],
        imports: [
            CommonModule,
            RouterModule,
            HttpClientModule
        ],
        exports: [ ProfilePageComponent ]
    })

    export class Module {};
//
