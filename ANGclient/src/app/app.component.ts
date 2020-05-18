/*
Import
*/
  // Angular
  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';

  // Inner
  import { AuthService } from './services/auth/auth.service';
  import { ObservablesService } from './services/observable/observable.service';
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

    constructor( private ObservablesService: ObservablesService, private AuthService: AuthService, private Router: Router ) {}

    async ngOnInit() {
      console.log(localStorage.getItem('userId'));

      if(localStorage.getItem('userId') != null) {
        this.AuthService.identity(localStorage.getItem('userId'))
        .then( apiResponse => {
          // Save user data
          this.ObservablesService.setObservableData('users', apiResponse.data);

          // Navigation to protected route
          this.Router.navigateByUrl('/');
        })
        .catch( error => {
          console.log("Auto connection fail", error);
          // Navigation to protected route
          this.Router.navigateByUrl('/connexion');
        });
      }
    }
  }
//
