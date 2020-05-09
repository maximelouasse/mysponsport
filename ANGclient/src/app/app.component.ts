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
      <header>
        <app-header></app-header>
      </header>

      <main>
        <router-outlet></router-outlet>
      </main>
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
