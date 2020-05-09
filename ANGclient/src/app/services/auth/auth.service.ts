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
  export class AuthService {

    // Inject module(s) in the service
    constructor( private HttpClient: HttpClient, private ObservablesService: ObservablesService ) {};

    // Function to register a user
    public register(userData: UserModel): Promise<any> {
      // Set header
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');

      // POST '/auth/register'
      return this.HttpClient.post(`${environment.apiUrl}/auth/register`, userData, { headers: myHeader })
      .toPromise().then(this.getData('register', userData)).catch(this.handleError);
    };

    // Function to register a user
    public identityValidation( _id: String, password: String ): Promise<any> {
      // Set header
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');
      const userData = {
        _id: _id,
        password: password
      }

      // POST '/auth/register'
      return this.HttpClient.post(`${environment.apiUrl}/auth/identity-validation`, userData, { headers: myHeader })
      .toPromise().then(this.getData('identity-validation', userData)).catch(this.handleError);
    };

    // Function to connect a user
    public login(userData: UserModel): Promise<any> {
      // Set header
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');

      // POST '/auth/login'
      return this.HttpClient.post(`${environment.apiUrl}/auth/login`, userData, { headers: myHeader })
      .toPromise().then(this.getData('login', userData)).catch(this.handleError);
    };

    // Function to reset password
    public restPassword(password: String, newPassword: String): Promise<any> {
      // Set header
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');

      // POST '/auth/login'
      return this.HttpClient.post(`${environment.apiUrl}/auth/password`, { password, newPassword }, { headers: myHeader })
      .toPromise().then(this.getData('password', { password, newPassword })).catch(this.handleError);
    };

    // Function to get user identity from server
    public getUserId(): Promise<any> {
      // POST '/auth/login'
      console.log("getuserId")
      return this.HttpClient.get(`${environment.apiUrl}/auth`)
      .toPromise().then(data => this.getData('auth', data)).catch(this.handleError);
    };

    // Get the API response
    private getData(endpoint, res: any) {
      console.log("sucess");
      console.log(res);
      // Switch endpoint to set observable value
      switch(endpoint) {
        case 'login':
          // Set user info observabale value
          this.ObservablesService.setObservableData('user', res)

          // Return data
          return res || {};
          break;

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
  };
//
