import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router : Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url = state.url;
    if(url==='/' && localStorage.getItem('token')!==null) {
      this.router.navigate(['/user']);
      return false;
    } else if(url==='/user' && localStorage.getItem('token')===null) {
      this.router.navigate(['']);
      return false;
    } else 
    return true;
  }
  
}
