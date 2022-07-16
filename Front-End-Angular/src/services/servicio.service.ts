import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, map } from "rxjs";





@Injectable({
  providedIn: 'root'
})

export class ServicioService {
  mostramelo=false;
  urls:string ="https://authporfolio.herokuapp.com"
  url="https://authporfolio.herokuapp.com/auth/login"
  urlocal="localhost:8080"
  imagenUrl="https://authporfolio.herokuapp.com/cloudinary"
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('usuario')|| '{}'))
  }

 
  IniciarSesion(credenciales:any):Observable<any>{
    return this.http.post(this.url, credenciales).pipe(map (data=>{
      localStorage.setItem('usuario', JSON.stringify(data));
      this.currentUserSubject.next(data);
      this.mostramelo=!this.mostramelo;
      
      
      return data;  
    }
    ))
    
    
  }
  logout(credenciales1:any) {
    return this.http.delete(this.url, credenciales1).pipe(map (data1=>{
      localStorage.removeItem('usuario');
      this.currentUserSubject.next(null);
     
      this.mostramelo = !this.mostramelo;
      return data1;
      
    }))
}



get UsuarioAutenticado(){
  return this.currentUserSubject.value;
}

//OBTENCIÓN DE DATOS GET

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
  return this.http.get(this.urls+"/ver/soft")
}
obtenerDatos6():Observable<any>{
  return this.http.get(this.urls+"/ver/hard")
}
obtenerDatos7():Observable<any>{
  return this.http.get(this.urls+"/ver/imagenes")
}

//IMAGENES CLOUDINARY



public list():Observable<any>{
  return this.http.get<any>(this.imagenUrl+"/list")
}


public upload(imagen: File):Observable<any>{
const formData = new FormData();
formData.append('multipartfile',imagen);
return this.http.post<any>(this.imagenUrl+'/upload',formData)
}

eliminarImagenes(id: number):Observable<any>{
  return this.http.delete<any>(this.imagenUrl+ `/delete/${id}`)
}




//MODIFICACIÓN DE DATOS PUT
modificarImagenes1(imagenes: Imagen):Observable<any>{
  return this.http.put (this.urlocal+"/modificar/imagen/"+12, imagenes)
}

modificarDatos(presentacion: Presentacion):Observable<any>{
return this.http.put(this.urls+"/modificar/presentacion/1", presentacion)
}

modificarHabilidades(soft:SoftsHard):Observable<any>{
  return this.http.put (this.urls+"/modificar/soft/8", soft)
}

modificarSobre(sobre:Sobremi):Observable<any>{
  return this.http.put(this.urls+"/modificar/dato/2", sobre)
}

modificarTitulos(titul: Titulos):Observable<any>{
  return this.http.put(this.urls+"/modificar/titulos/3", titul)
}
modificarEducacion(edu:Educacion):Observable<any>{
  return this.http.put (this.urls+"/modificar/educacion/4",edu)
}

modificarProyecto(proyecto: Proyectos):Observable<any>{
  return this.http.put(this.urls+"/modificar/proyecto/5", proyecto)
  }

modificarHardSkills(hardskills: HardSkills):Observable<any>{
  return this.http.put(this.urls+"/modificar/hard/11", hardskills)
}

modificarImagenes(imagenes: Imagen):Observable<any>{
  return this.http.put(this.urls+"/modificar/imagen/12",imagenes)
}


}



export interface HardSkills {
  javaScript:number,
  angular:number,
  html:number,
  css:number,
  boostrap:number,
  java:number,
  springboot:number,
  mysql:number,
}


export interface Presentacion {
nombreytitulo:string;
nacimiento:string;
edad:string;
estudios:string;
residencia:string;
estudios2:string;
estudios3:string;
email:string;


}

export interface Sobremi {
datos:string;
}

export interface Titulos {
titulo:any;
titulo1:any,
titulo2:any,
titulo3:any,
titulo4:any,
}

export interface Educacion {
titulo:any,
titulo1:any,
datos:any,
datos1:any
}

export interface SoftsHard {
  trabajotitulo:any;
  comunicaciontitulo:any;
  creatividadtitulo:any;
  adaptaciontitulo:any;
  trabajodato:any;
  comunicaciondato:any;
  creatividaddato:any;
  adaptaciondato:any;
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

export interface Imagen {
  portada:string;
  perfil:string;
}