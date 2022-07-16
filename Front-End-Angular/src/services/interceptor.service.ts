import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { ServicioService } from './servicio.service';
import { PorfolioService } from './porfolio.service';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private autenticacionService: ServicioService, private spinnerServ: SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  this.spinnerServ.llamarSpinner();
  var usuario = this.autenticacionService.UsuarioAutenticado;
  if (usuario && usuario.token) {
  req = req.clone({
  setHeaders:{Authorization: `Bearer ${usuario.token}`}
 })
  }
  
  return next.handle(req).pipe(finalize(()=> this.spinnerServ.detenerSpinner()));
}


}

  
 
