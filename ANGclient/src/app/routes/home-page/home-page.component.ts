/*
Imports & definition
*/
  // Imports
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { ApiResponseModel } from "../../models/api.response.model";
  import { UserService } from "../../services/user/user.service";
  import { ObservablesService } from '../../services/observable/observable.service';

  // Cookie service
  import { CookieService } from 'ngx-cookie-service';

  import { Router } from '@angular/router';

  // Definition
  @Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    providers: [ UserService, CookieService ]
  })
//

/*
Export
*/
  export class HomePageComponent implements OnInit {

    // Properties
    public userData: any;
    private userId: any;

    public messageClass: String;
    public apiMessage: String;

    // Module injection
    constructor(
      private UserService: UserService,
      private Router: Router,
      private ObservablesService: ObservablesService,
      private cookieService: CookieService,
    ) {
        this.userId = this.cookieService.get('userId');
    };

    /*
    Methods
    */
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
    //


    /*
    Hooks
    */
      ngOnInit() {
        this.getUser();
      };
    //
  };
//
