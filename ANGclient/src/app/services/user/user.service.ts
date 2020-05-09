/*
Imports
*/
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';

  // Inner
  import { ObservablesService } from "../observable/observable.service";
  import { environment } from "../../../environments/environment";
  import { UserModel } from '../../models/user.model';
//

/*
Definition
*/
  @Injectable()
  export class UserService {

    // Inject module(s) in the service
    constructor( private HttpClient: HttpClient, private ObservablesService: ObservablesService ) {};

    public getUserData(userId): Promise<any> {
      return this.HttpClient.get(`${environment.apiUrl}/user/${userId}`)
      .toPromise().then(data => this.getData('user', data)).catch(this.handleError);
    }

    // Get the API response
    private getData(endpoint, res: any) {
      console.log("sucess");
      console.log(res);
      // Switch endpoint to set observable value
      switch(endpoint) {
        default:
          // Retun data anytime
          return res || {};
          break;
      }
    };

    // Get the API error
    private handleError(err: any) {
      console.log("error")
      return Promise.reject(err.error);
    };
  }
