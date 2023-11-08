import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment.development';
import { iLogin, iRegister } from "src/app/models/trending.model";


@Injectable({
  providedIn: "root",
})
export class UsersService {
  
  apiUrl: string = 'https://api.themoviedb.org/3/' 

  constructor(private _http: HttpClient) { 
  }

  getLogin(): Observable<iLogin> {
    let params = { language: 'es-ES' }; 
    let headers = { 
      accept: 'application/json',
      Authorization: `Bearer ${environment.tokenAPI}`
    }
    return this._http.get<iLogin>(this.apiUrl + '/authentication/token/validate_with_login', {
      params: params,
      headers: headers

    })
    
    }
    getRegister(): Observable<iRegister> {
      let params = { language: 'es-ES' }; 
      let headers = { 
        accept: 'application/json',
        Authorization: `Bearer ${environment.tokenAPI}`
      }
      return this._http.get<iRegister>(this.apiUrl + '/authentication/token/register', {
        params: params,
        headers: headers
  
      })
}


}