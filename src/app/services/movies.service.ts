import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITrendingReponse } from '../models/trending.model';
import { environment } from 'src/environments/environment.development';
import { IMoviepopular } from '../models/trending.model';
import { ISeriespopular } from '../models/trending.model';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiUrl: string = 'https://api.themoviedb.org/3/' 

  constructor(private _http: HttpClient) { 
  }

  getTrending(): Observable<ITrendingReponse> {
    let params = { language: 'es-ES' }; 
    let headers = { 
      accept: 'application/json',
      Authorization: `Bearer ${environment.tokenAPI}`
    }
    return this._http.get<ITrendingReponse>(this.apiUrl + 'trending/all/week', {
      params: params,
      headers: headers

    })
    
    }

     
  getmovies():  Observable<IMoviepopular> {
    let params = { language: 'es-ES' }; 
    let headers = { 
      accept: 'application/json',
      Authorization: `Bearer ${environment.tokenAPI}`
    } 
    return this._http.get<IMoviepopular>(this.apiUrl + '/movie/latest', {
      params: params,
      headers: headers
    })
      
    }

  getseries(): Observable<ISeriespopular> {
    let params = { language: 'es-ES' }; 
    let headers = { 
      accept: 'application/json',
      Authorization: `Bearer ${environment.tokenAPI}`
   }
   return this._http.get<ISeriespopular>(this.apiUrl + '/tv/popular', {
     params: params,
     headers: headers
    })
  }
}