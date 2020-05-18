// Imports
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

// Inner
import { ApiResponseModel } from "./models/api.response.model";
import { AuthService } from "./services/auth/auth.service";

// Definition
@Injectable({ providedIn: 'root' })

// Export
export class AuthGuard implements CanActivate {

    constructor(
    private AuthService: AuthService,
    private Router: Router,
    ) {}

    canActivate(): Promise<any> {
      return new Promise( (resolve, reject) => {
        if(localStorage.getItem('userId') != null) {
          this.AuthService.identity(localStorage.getItem('userId'))
          .then( ( apiResponse ) => {
            if(apiResponse.err == null) { return resolve(true) }
            else { this.Router.navigateByUrl('/connexion') };
          })
          .catch( ( apiResponse ) =>  this.Router.navigateByUrl('/connexion'))
        } else {
          this.Router.navigateByUrl('/connexion')
        }
      })
  }
}
