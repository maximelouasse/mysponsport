/*
Imports & definition
*/
  // Imports
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { UserModel } from '../../models/user.model';
  import { ApiResponseModel } from "../../models/api.response.model";
  import { AuthService } from "../../services/auth/auth.service";
  import { ObservablesService } from '../../services/observable/observable.service';

  // Cookie service
  import { CookieService } from 'ngx-cookie-service';

  import { Router } from '@angular/router';

  // Definition
  @Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    providers: [ AuthService, CookieService ]
  })
//

/*
Export
*/
  export class LoginPageComponent implements OnInit {

    // Register form data
    public resetFormDataRegister: Boolean = false;
    public displayReturnRegister: Boolean = false;
    public messageClassRegister: String;
    public apiMessageRegister: String;

    // Login form data
    public resetFormDataLogin: Boolean = false;
    public displayReturnLogin: Boolean = false;
    public messageClassLogin: String;
    public apiMessageLogin: String;

    // Module injection
    constructor(
      private AuthService: AuthService,
      private Router: Router,
      private cookieService: CookieService,
      private ObservablesService: ObservablesService
    ) {};

    /*
    Methods
    */
      // Register new user
      public registerUser = (data: UserModel) => {
        // Send user data
        this.AuthService.register(data)
        .then( (apiResponse: ApiResponseModel) => {
          // API success response
          this.messageClassRegister = 'success';
          this.apiMessageRegister = apiResponse.message;
          this.displayReturnRegister = true;

          // Reset form data
          this.resetFormDataRegister = true;

          this.cookieService.set('userId', apiResponse.data.user._id);
          this.Router.navigate([ '/' ]);
        })
        .catch( (apiResponse: ApiResponseModel) => {
          // API error response
          this.messageClassRegister = 'error';
          this.apiMessageRegister = apiResponse.message;
          this.displayReturnRegister = true;
        })
      };

      // Connnect new user
      public connectUser = (data: UserModel) => {
        // Send user data

        this.AuthService.login(data)
        .then( (apiResponse: ApiResponseModel) => {
          // API success response
          this.messageClassLogin = 'success';
          this.apiMessageLogin = apiResponse.message;

          this.displayReturnLogin = true;

          // Reset form data
          this.resetFormDataLogin = true;
          console.log(apiResponse.data);

          this.ObservablesService.setObservableData('user', apiResponse.data);

          this.cookieService.set('userId', apiResponse.data.user._id);
          this.Router.navigate([ '/' ]);
        })
        .catch( (apiResponse: ApiResponseModel) => {
          // API error response
          this.messageClassLogin = 'error';
          this.apiMessageLogin = apiResponse.message;
          this.displayReturnLogin = true;
        })
      };
    //


    /*
    Hooks
    */
      ngOnInit() { };
    //
  };
//
