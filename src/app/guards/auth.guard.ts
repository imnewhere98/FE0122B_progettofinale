import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private authService : AuthService,private router : Router){

}
canActivate() {
    if (localStorage.getItem('utente')) {
      return true;
    }
    return this.router.createUrlTree(['/login']);
  }

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot) {
//     let url : string = state.url;
//     return this.checkLogin(url)
//   }


//   checkLogin(url:string):boolean{
//    // if(this.authService.isLogged){return true}
//     this.router.navigate(['clienti']);
//     return false
//   }
}
