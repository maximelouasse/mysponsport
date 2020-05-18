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

    /*
      Method to set header
      */
    private setHeaderRequest = () => {
      // Set header
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');

      // Return header
      return { headers: myHeader };
    }
    //

    // Function to register a user
    public register(userData: UserModel): Promise<any> {
      // POST '/auth/register'
      return this.HttpClient.post(`${environment.apiUrl}/auth/register`, userData, this.setHeaderRequest())
      .toPromise()
      .then( userData => this.getData('register', userData) )
      .catch(this.handleError);
    };

    // Function to register a user
    public identityValidation( _id: String, password: String ): Promise<any> {
      const userData = {
        _id: _id,
        password: password
      }

      // POST '/auth/register'
      return this.HttpClient.post(`${environment.apiUrl}/auth/identity-validation`, userData, this.setHeaderRequest())
      .toPromise()
      .then( userData => this.getData('identity-validation', userData) )
      .catch(this.handleError);
    };

    // Function to connect a user
    public login(userData: UserModel): Promise<any> {
      // POST '/auth/login'
      return this.HttpClient.post(`${environment.apiUrl}/auth/login`, userData, this.setHeaderRequest())
      .toPromise()
      .then( userData => this.getData('login', userData) )
      .catch(this.handleError);
    };

    // Function to reset password
    public restPassword(password: String, newPassword: String): Promise<any> {
      // POST '/auth/login'
      return this.HttpClient.post(`${environment.apiUrl}/auth/password`, { password, newPassword }, this.setHeaderRequest())
      .toPromise()
      .then( this.getData('password', { password, newPassword }) )
      .catch(this.handleError);
    };

    public identity(userId: String): Promise<any> {
      // Launch request
      return this.HttpClient.get(`${environment.apiUrl}/user/${userId}`)
      .toPromise()
      .then( data => this.getData('users', data))
      .catch(this.handleError);
    }

    // Function to get user identity from server
    public getUserId(): Promise<any> {
      // POST '/auth/login'
      console.log("getuserId")
      return this.HttpClient.get(`${environment.apiUrl}/auth`)
      .toPromise()
      .then( data => this.getData('auth', data) )
      .catch(this.handleError);
    };

    // Get the API response
    private getData(endpoint, res: any) {
      console.log("sucess");
      console.log(res);
      // Switch endpoint to set observable value
      switch(endpoint) {
        case 'login':
          // Set user info observabale value
          this.ObservablesService.setObservableData('users', res)

        case 'users':
            // Set user info observabale value
            this.ObservablesService.setObservableData('users', res)

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
