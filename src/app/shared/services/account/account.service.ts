import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { CONSTANTE_ACCOUNT_URL } from '../../constante';

@Injectable({ providedIn: 'root' })
export class AccountService {

    //public listBreadcums : Array<Object> = [] ;


    constructor(
        private router: Router,
        private http: HttpClient
    ) {
    }
    authenticate(username, password) {
        if (username === "root" && password === "root") {
          sessionStorage.setItem('username', username)
          return true;
        } else {
          return false;
        }
      }
    
      isUserLoggedIn() {
        let user = sessionStorage.getItem('username')
        console.log(!(user === null))
        return !(user === null)
      }
    
      
      public logout() {
        sessionStorage.removeItem('username');
        this.router.navigate(['/authentification/login']);
    }

     

    public whoiam() {
        
    }

     

    public forgotPassword() {
        
    }

    public getFunction() {
         
    }
}
