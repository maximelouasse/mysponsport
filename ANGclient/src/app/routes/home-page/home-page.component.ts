/*
Imports & definition
*/
  // Imports
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { ApiResponseModel } from "../../models/api.response.model";
  import { AuthService } from '../../services/auth/auth.service';

  import { Router } from '@angular/router';

  // Definition
  @Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    providers: [ AuthService ]
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
      private Router: Router,
      private AuthService: AuthService
    ) { };

    /*
    Methods
    */
    public getUser = () => {
      localStorage.getItem('userId');

      this.AuthService.identity(localStorage.getItem('userId'))
      .then( (apiResponse: ApiResponseModel) => {
        // API success response
        console.log(apiResponse.data);

        this.messageClass = 'success';
        this.apiMessage = apiResponse.message;

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
      async ngOnInit() {
        await this.getUser();
      };
    //
  };
//
