/*
Imports
*/
  import { Injectable } from '@angular/core';
  import { BehaviorSubject, Observable } from 'rxjs';
//

/*
Definition and export
*/
  @Injectable({
    providedIn: 'root'
  })
  export class ObservablesService {

    constructor() {}

    protected userInfo: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    // Set observable value
    public setObservableData = (type: string, data: any) => {
      switch(type) {
        case 'users':
          this.userInfo.next(data);
          break;

        default:
          break;
      };
    };

    // Get observable value
    public getObservableData = (type: string) => {
      switch(type) {
        case 'users':
          return this.userInfo;

        default:
        break;
    };
  };
  }
//
