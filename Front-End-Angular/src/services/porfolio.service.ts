import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
import { ServicioService } from './servicio.service';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

urls:string ="https://authporfolio.herokuapp.com"


  constructor(private http:HttpClient) { }
  
  obtenerDatos():Observable<any>{
    return this.http.get(this.urls+"/ver/presentacion")
  }

  obtenerDatos1():Observable<any>{
   return this.http.get(this.urls+"/ver/datos") 
  }
obtenerDatos2():Observable<any>{
  return this.http.get(this.urls+"/ver/titulos")
}

obtenerDatos3():Observable<any>{
  return this.http.get(this.urls+"/ver/educacion")
}
obtenerDatos4():Observable<any>{
  return this.http.get(this.urls+"/ver/proyecto")
}

obtenerDatos5():Observable<any>{
  return this.http.get(this.urls+"/ver/hard")
}





public modificarDatos(body:Presentacion):Observable<Presentacion>{
  return this.http.patch<Presentacion>(this.urls+"/modificar/presentacion/"+1, body)
}





}

export interface Presentacion {
  nombreytitulo:any;
  nacimiento:any;
  edad:any;
  estudios:any;
  residencia:any;
  estudios2:any;
  estudios3:any;
  email:any;
  
  
}

export interface Sobremi {
  datos:string;
}

export interface Titulos {
  titulo:string;
  titulo1:string,
  titulo2:string,
  titulo3:string,
}

export interface Educacion {
  titulo:string,
  titulo1:string,
  datos:string,
  datos1:string
}

export interface Proyectos{ 
  titulo:string,
  proyecto:string,
  proyecto1:string,
  proyecto2:string,
  proyecto3:string,
  proyecto4:string,
  proyecto5:string,
  proyecto6:string

}