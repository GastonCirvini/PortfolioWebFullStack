import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HttpClient} from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ServicioService } from 'src/services/servicio.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,


})
export class BodyComponent implements OnInit {
  habilitar:boolean = true;
  cambiar: boolean = false;
  miPorfolio:any ;
  miPorfolio1:any ;
  miPorfolio2:any ;
  miPorfolio3:any;
  miPorfolio4:any ;
  miPorfolio5:any;
  miPorfolio6:any;
  miPorfolio7:any;
  closeResult= '';
  editarPresentacion: Presentacion = {nombreytitulo:"", nacimiento:"",edad:"",estudios: "",estudios2:"",residencia:"",estudios3:"",email:""};
  mostrarPresentacion = false;
  editarSobremi: Sobremi = {datos:""}
  editarTitulos: Titulos = {  titulo:"", titulo1:"", titulo2:"",titulo3:"", titulo4:""}
  editarSofts1: SoftsHard = { trabajotitulo:"",comunicaciontitulo:"",creatividadtitulo:"",adaptaciontitulo:"",trabajodato:"",comunicaciondato:"",creatividaddato:"",adaptaciondato:"" }
  editarProyecto: Proyectos = {titulo:"",proyecto:"",proyecto1:"",proyecto2:"", proyecto3:"",proyecto4:"",proyecto5:"", proyecto6:""};
 editarHardSkills:any;
ha: boolean = false;
//IMAGEN
editarImagenes: Imagen = {perfil:"",portada:""}

onFileChange2(e:any){
this.editarImagenes.perfil = e[0].base64
console.log(e)
console.log(this.editarImagenes.perfil)
}

onFileChange3(e:any){
  this.editarImagenes.portada = e[0].base64
  console.log(e)
  console.log(this.editarImagenes.perfil)
  }

  onUpload(){
    this.datosPorfolio.modificarImagenes(this.editarImagenes).subscribe(data =>{
      console.log("el archivo se subió"+data)
      window.location.reload()
    
    })
    }
    onUpload2(){
      this.datosPorfolio.modificarImagenes(this.editarImagenes).subscribe(data =>{
        console.log("el archivo se subió"+data)
        window.location.reload()
      })
      }
    
    
    onFileChange1(e:any){
      this.editarImagenes.portada = e[0].base64
       console.log(this.editarImagenes.perfil);
     }
    


//Modal Presentación  
open(content:any) {
  this.editarPresentacion = this.miPorfolio
    this.editarPresentacion = this.miPorfolio 
  this.editarPresentacion = this.miPorfolio
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}


  //SOBRE MI
  open1(content1:any) {
    this.editarSobremi = this.miPorfolio1
    this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }






  //TITULOS
  open8(content8:any) {
    this.editarTitulos = this.miPorfolio2
     this.modalService.open(content8, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
       this.closeResult = `Closed with: ${result}`;
     }, (reason) => {
       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
     });
   }
  






  //SOFT AND HARD SKILLS
  open4(content4:any) {
    this.editarSofts1= this.miPorfolio5
    this.modalService.open(content4, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

//PROYECTOS
  open5(content5:any) {
    this.editarProyecto = this.miPorfolio4
    this.modalService.open(content5, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  //IMAGEN PERFIL
  open6(content6:any) {
   this.editarImagenes.perfil = this.miPorfolio7.perfil
    this.modalService.open(content6, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

//IMAGEN DE PORTADA
  open7(content7:any) {
    this.editarImagenes.portada = this.miPorfolio7.portada
    this.modalService.open(content7, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
//HardSkills
  open9(content9:any) {
   this.editarHardSkills = this.miPorfolio6
    this.modalService.open(content9, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open10(content10:any) {
    this.editarHardSkills = this.miPorfolio6
     this.modalService.open(content10, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
       this.closeResult = `Closed with: ${result}`;
     }, (reason) => {
       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
     });
   }
 
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

constructor( private messageService: MessageService, private http:HttpClient, public datosPorfolio:ServicioService, private modalService: NgbModal, private cd:ChangeDetectorRef) {}

verDatos(){
  this.datosPorfolio.obtenerDatos().subscribe(data =>{
   
    this.miPorfolio = data [0]})
  };

verDatos1(){
  this.datosPorfolio.obtenerDatos1().subscribe(data1 => {
    
    this.miPorfolio1=data1[0];
  });
}
  verDatos2(){
    this.datosPorfolio.obtenerDatos2().subscribe(data2 =>{
      this.miPorfolio2=data2[0];
    });

  }
  verDatos3(){
  this.datosPorfolio.obtenerDatos3().subscribe(data3 =>{
      this.miPorfolio3=data3[0];
    });
  }

  verDatos4(){
    this.datosPorfolio.obtenerDatos4().subscribe(data4 =>{
      this.miPorfolio4=data4[0]
    })
  }
  
  verDatos5(){
    this.datosPorfolio.obtenerDatos5().subscribe(data5 =>{
      this.miPorfolio5=data5[0]
    })
  }

  verDatos6(){
    this.datosPorfolio.obtenerDatos6().subscribe(data6=>{
      this.miPorfolio6=data6[0]
    })
  }
  
  verDatos7(){
    this.datosPorfolio.obtenerDatos7().subscribe(data7=>{
      this.miPorfolio7=data7[0]
    })
  }


  //EDICION - PUT
  editarPresentacion1(){ 
      this.datosPorfolio.modificarDatos(this.editarPresentacion).subscribe (data =>{
        this.datosPorfolio=data[0]
        console.log(data);
      });    
  }

    editarSobre(){
      this.datosPorfolio.modificarSobre(this.editarSobremi).subscribe(data2 =>{
        this.datosPorfolio=data2[0]
      })
    }

    editarTitulos1(){
      this.datosPorfolio.modificarTitulos(this.editarTitulos).subscribe(data3 =>{
        this.datosPorfolio=data3[0]
        console.log(data3);
      })
    }
    editarSofts(){
      this.datosPorfolio.modificarHabilidades(this.editarSofts1).subscribe(data5 =>{
        this.datosPorfolio=data5[0];
      })
    }
    
  editarProyecto1(){
    this.datosPorfolio.modificarProyecto(this.editarProyecto).subscribe(data4 =>{
      this.datosPorfolio=data4[0]
    })
  }


editarHardSkills1(){
  this.datosPorfolio.modificarHardSkills(this.editarHardSkills).subscribe(data7=>{
    this.datosPorfolio=data7[0];
  })
}

editarImagenes3(){
  this.datosPorfolio.modificarImagenes(this.editarImagenes).subscribe(data =>{
    this.datosPorfolio = data[0];
  })
}





  ngOnInit() {

    this.datosPorfolio.modificarImagenes;
    this.datosPorfolio.obtenerDatos6;
    this.datosPorfolio.modificarEducacion;
    this.datosPorfolio.modificarSobre;
    this.datosPorfolio.modificarTitulos;
    this.datosPorfolio.modificarDatos;
    this.datosPorfolio.modificarProyecto;
    this.datosPorfolio.modificarHardSkills;
    this.datosPorfolio.modificarImagenes;
  

  this.datosPorfolio.obtenerDatos().subscribe(data => {
    this.miPorfolio = data[0];
    });
  
  
  this.datosPorfolio.obtenerDatos4().subscribe(data4 =>{
    this.miPorfolio4=data4[0]
  })

  this.datosPorfolio.obtenerDatos5().subscribe(data5 =>{
    this.miPorfolio5=data5[0]
  })

  this.datosPorfolio.obtenerDatos6().subscribe(data6 =>{
    this.miPorfolio6=data6[0]
    return data6;
  })

  this.datosPorfolio.obtenerDatos7().subscribe(data7=>{
    this.miPorfolio7=data7[0]
  })  
  }


  
  }

  
  //Exportaciones
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
  datos:any;
}

export interface Titulos {
  titulo:any;
  titulo1:any,
  titulo2:any,
  titulo3:any,
  titulo4:any,
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


  
export interface Autenticado {
  data:any;
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

  export interface Imagen {
   
    perfil:string
    portada:string
  }