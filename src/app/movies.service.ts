import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getItemDetails(id:string , mediaType:string):Observable<any>
  {
 
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=&language=en-US`)
  }

  

  
  getSimilar(id:string , mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=&language=en-US&page=1`)

  }

  getTrendine(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=`)

  }
}
