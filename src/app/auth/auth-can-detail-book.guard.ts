import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LibraryService } from '../services/library.service';
import { DataBook } from '../class/data-book';

@Injectable({
  providedIn: 'root'
})
export class AuthCanDetailBookGuard implements CanActivate {

  constructor(private libraryService: LibraryService, private router: Router) {

  }

  canActivate(): boolean {
    if(this.libraryService.checkSelectBookExist()){
      return true;
    }else{
      this.router.navigate(['/']);
    }
    return false;
  }

}
