// Angular
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
//

// Inner
  import { ObservablesService } from "../observable/observable.service";
  import { environment } from 'src/environments/environment';
//

/*
Definition
*/
  @Injectable()
  export class CrudService {

    // Inject module(s) in the service
    constructor(
      private HttpClient: HttpClient,
      private ObservablesService: ObservablesService
    ) {};

    // CRUD method: read item
    public readOneItem(endpoint: String, param: String): Promise<any>{
      return this.HttpClient.get(`${environment.apiUrl}/${endpoint}?${param}`)
      .toPromise()
      .then( data => this.getData(endpoint, data))
      .catch(this.handleError);
    };

    // CRUD method: read all items
    public readAllItems(endpoint: String): Promise<any>{
      return this.HttpClient.get(`${environment.apiUrl}/${endpoint}`)
      .toPromise()
      .then( data => this.getData(endpoint, data))
      .catch(this.handleError);
    };

    // CRUD method: create item
    public createItem(endpoint: String, data: any): Promise<any>{
      // Set header
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');

      // Launch request
      return this.HttpClient.post(`https://jsonplaceholder.typicode.com/posts`, data, { headers: myHeader })
      .toPromise()
      .then( data => this.getData(endpoint, data))
      .catch(this.handleError);
    };

    // CRUD method: edit an item
    public updateItem(endpoint: String, _id: String, data: any): Promise<any>{
      // Set header
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');

      // Launch request
      return this.HttpClient.put(`https://jsonplaceholder.typicode.com/posts/${_id}`, data, { headers: myHeader })
      .toPromise()
      .then( data => this.getData(endpoint, data))
      .catch(this.handleError);
      };

    // CRUD method: delete an item
    public deleteItem(endpoint: String, _id: String): Promise<any>{
      // Set header
      let myHeader = new HttpHeaders();
      myHeader.append('Content-Type', 'application/json');

      // Launch request
      return this.HttpClient.delete(`https://jsonplaceholder.typicode.com/posts/${_id}`, { headers: myHeader })
      .toPromise()
      .then( data => this.getData(endpoint, data))
      .catch(this.handleError);
    };

    /*
    Methods to get API responses
    */
      // Get the API response
      private getData = (endpoint, apiResponse: any) => {
          // Switch endpoint to set observable value
          switch(endpoint) {
            case 'user':
              // Set user info observabale value
              this.ObservablesService.setObservableData('users', apiResponse)

              // Return data
              return apiResponse || {};
              break;

            default:
                // Retun data anytime
                return apiResponse || {};
                break;
          };
      };

      // Get the API error
      private handleError = (apiError: any) => Promise.reject(apiError.error);
    //
  };
//
