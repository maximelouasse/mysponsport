  import { Component, OnInit } from '@angular/core';

  // Inner
  import { ObservablesService } from '../../services/observable/observable.service';
  import { ApiResponseModel } from "../../models/api.response.model";
  import { AuthService } from '../../services/auth/auth.service';

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

      public messageClass: String;
      public apiMessage: String;

      constructor(
          private ObservablesService: ObservablesService,
          private cookieService: CookieService,
          private AuthService: AuthService
      ){
          this.userData = this.cookieService.get('userId');

          // Get user data observer
          this.ObservablesService.getObservableData('users').subscribe( userDataObserver => {
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

    /*
    Methods
    */
    public getUser = () => {
      localStorage.getItem('userId');

      this.AuthService.identity(localStorage.getItem('userId'))
        .then((apiResponse: ApiResponseModel) => {
          // API success response
          console.log(apiResponse.data);

          this.messageClass = 'success';
          this.apiMessage = apiResponse.message;

          this.userData = apiResponse.data;
        })
        .catch((apiResponse: ApiResponseModel) => {
          // API error response
          this.messageClass = 'error';
          this.apiMessage = apiResponse.message;
        })
    }
    //

      public logout = () => {
        this.cookieService.delete('userId');

        localStorage.removeItem('userId');

        // Set user info observabale value
        this.ObservablesService.setObservableData('users', null)
      }

      ngOnInit(){};
  }
