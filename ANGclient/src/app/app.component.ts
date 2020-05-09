/*
Import
*/
  // Angular
  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
//

/*
Componant configuration
*/
  @Component({
    selector: 'app-root',
    template: `
      <app-sidebar></app-sidebar>
      <app-header></app-header>
      <router-outlet></router-outlet>
    `
  })
//


/*
Componant class definition
*/
  export class AppComponent {
    title = 'MySponsport';
  }
//
