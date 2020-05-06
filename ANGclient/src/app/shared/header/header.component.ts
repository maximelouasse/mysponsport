import { Component, OnInit } from '@angular/core';

// Inner
import { ObservablesService } from '../../services/observable/observable.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ],
})
export class HeaderComponent implements OnInit {

  /*
  Declaration
  */
    // Properties
    public userData: any;

    constructor(
        private ObservablesService: ObservablesService
    ){
        // Get user data observer
        this.ObservablesService.getUserInfo().subscribe( userDataObserver => {
            if(userDataObserver === null) {
                this.userData = null
            } else {
                if(userDataObserver.data.length > 0) {
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

    public logout = () => {
        // Delete localstorage
        localStorage.removeItem('userEmail');

        // Set user info observabale value
        this.ObservablesService.setObservableData('user', null)
    }

    ngOnInit(){};
}
