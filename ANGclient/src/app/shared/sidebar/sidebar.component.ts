import { Component, OnInit } from '@angular/core';

import { ApiResponseModel } from "../../models/api.response.model";
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  public userData: any;
  private userId: any;

  public messageClass: String;
  public apiMessage: String;

  constructor(
    private AuthService: AuthService
  ) { }

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


  /*
  Hooks
  */
  async ngOnInit() {
    await this.getUser();
  };
    //

}
