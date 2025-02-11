import { 
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
 } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class apikeyInterceptor implements HttpInterceptor{

  constructor(){}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


   let  newReq = request.clone({
      url:request.url.replace('api_key=' , 'api_key=f1aca93e54807386df3f6972a5c33b50')
    })

    return  next.handle(newReq)
    
  }
}

