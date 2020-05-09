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


    canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
        return new Promise( (resolve, reject) => {
          // Use Auth service to check user indentity from the servere
          this.AuthService.getUserId()
            .then( (apiResponse: ApiResponseModel) =>  resolve(true))
            .catch( (apiResponse: ApiResponseModel) =>  this.Router.navigateByUrl('/'))
        })
    }
}
