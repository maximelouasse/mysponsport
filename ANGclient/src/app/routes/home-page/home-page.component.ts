/*
Import
*/
  // Angular
  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';

  // Inner
  import { CrudService } from "../../services/crud/crud.service";
import { ObservablesService } from 'src/app/services/observable/observable.service';
//

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styles: [],
})
export class HomePageComponent implements OnInit {

    // Properties
    public userData: any;

    constructor(
      private CrudService: CrudService,
      private Router: Router,
      private ObservablesService: ObservablesService
    ) {
      // Get user data observer
      this.ObservablesService.getUserInfo().subscribe( userDataObserver => {
          console.log(userDataObserver);
          if(userDataObserver === null) {
              this.userData = null
          } else {
              if(userDataObserver.data.length > 0) {
                console.log(userDataObserver);
                  // Set local storage
                  localStorage.setItem('userEmail', userDataObserver.data[0].email );

                  // Update userData value
                  this.userData = userDataObserver.data[0];
              } else {
                  this.userData = null
              }
          }
      })
    }

    public getUserInfo = (email: String ) => {
        // Get user infos
        const userInfo = this.CrudService.readOneItem('user', `email=${email}`);

        // Check user info
        //if(userInfo.length > 0) {
            // Change route endpoint
            this.Router.navigateByUrl('/connected');
        //}
    };

    ngOnInit(): void {}

}
