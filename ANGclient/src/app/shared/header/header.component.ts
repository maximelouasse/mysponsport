  import { Component, OnInit } from '@angular/core';

  // Inner
  import { ObservablesService } from '../../services/observable/observable.service';

  // Cookie service
  import { CookieService } from 'ngx-cookie-service';

  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [],
    providers: [ CookieService ]
  })

  export class HeaderComponent implements OnInit {

    /*
    Declaration
    */
      // Properties
      public userData: any;

      constructor(
          private ObservablesService: ObservablesService,
          private cookieService: CookieService
      ){
          this.userData = this.cookieService.get('userId');

          // Get user data observer
          this.ObservablesService.getUserInfo().subscribe( userDataObserver => {
              if(userDataObserver === null || userDataObserver === 'undefined') {
                  this.userData = null
              } else {
                // Set local storage
                sessionStorage.setItem('userId', JSON.stringify(userDataObserver) );

                // Update userData value
                this.userData = userDataObserver;
              }
          })
      }

      public logout = () => {
        this.cookieService.delete('userId');

        localStorage.removeItem('userId');

        // Set user info observabale value
        this.ObservablesService.setObservableData('user', null)
      }

      ngOnInit(){};
  }
