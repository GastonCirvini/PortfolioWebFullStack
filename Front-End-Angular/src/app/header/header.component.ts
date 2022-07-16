import { Component, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServicioService } from 'src/services/servicio.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  habilitarCampos:boolean = true;
  mostrarse1 = true;
  form:FormGroup;
  mostramela=false;
  ocultar = false;
mostrarse2= true;
ha: boolean = false;
  constructor(private formBuilder:FormBuilder, private autenticacionService:ServicioService, http:HttpClient, private ruta:Router) {
    this.form=this.formBuilder.group({
        nombreUsuario:['',[   Validators.required, Validators.email]],
        password:['',[ Validators.required, Validators.maxLength(4)]]
      }
    )
   }

  ngOnInit(): void {
 
    
  }
get nombreUsuario(){
  return this.form.get('nombreUsuario');
}
get password(){
  return this.form.get('password');
}


onEnviar(event:Event){
  
  event.preventDefault;
  this.autenticacionService.IniciarSesion(this.form.value).subscribe(data =>{
    this.ocultar = !this.ocultar
    this.mostrarse1 = !this.mostrarse1;
    this.mostrarse2= !this.mostrarse2;
    this.ruta.navigate(["/"]);
    this.habilitarCampos = true;
    alert("Sesión iniciada");
  
  })                                                
 }

 logOut(event:Event) {
   event.stopPropagation;
   this.autenticacionService.logout
  localStorage.removeItem('currentUser');
  this.autenticacionService.currentUserSubject.next(null);
  window.location.reload()
}
  

 muestro(){
  this.ocultar = true;
  
 }



 
}


