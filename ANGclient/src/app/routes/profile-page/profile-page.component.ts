/*
Imports & definition
*/
  // Imports
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { ObservablesService } from '../../services/observable/observable.service';
  import { ApiResponseModel } from "../../models/api.response.model";
  import { UserService } from "../../services/user/user.service";

  // Cookie service
  import { CookieService } from 'ngx-cookie-service';

  import { Router } from '@angular/router';

  // Definition
  @Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    providers: [ UserService, CookieService ]
  })
//

/*
Export
*/
  export class ProfilePageComponent implements OnInit {

    /*
    Declaration
    */
      // Properties
      private userId: any;
      public userData: any;

      public messageClass: String;
      public apiMessage: String;

      constructor(
          private UserService: UserService,
          private Router: Router,
          private ObservablesService: ObservablesService,
          private cookieService: CookieService,
      ){
          this.userId = this.cookieService.get('userId');
      }

      public getUser = () => {
        this.UserService.getUserData(this.userId)
        .then( (apiResponse: ApiResponseModel) => {
          // API success response
          this.messageClass = 'success';
          this.apiMessage = apiResponse.message;

          console.log(apiResponse.data);

          this.ObservablesService.setObservableData('user', apiResponse.data);

          this.userData = apiResponse.data;
        })
        .catch( (apiResponse: ApiResponseModel) => {
          // API error response
          this.messageClass = 'error';
          this.apiMessage = apiResponse.message;
        })
      }

      ngOnInit() {
        this.getUser();
      };

  }
