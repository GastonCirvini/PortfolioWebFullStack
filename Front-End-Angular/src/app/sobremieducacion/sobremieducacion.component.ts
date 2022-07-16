import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HttpClient} from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ServicioService } from 'src/services/servicio.service';

@Component({
  selector: 'app-sobremieducacion',
  templateUrl: './sobremieducacion.component.html',
  styleUrls: ['./sobremieducacion.component.scss'],
  providers: [MessageService]
})
export class SobremieducacionComponent implements OnInit {
  miPorfolio1:any ;
  miPorfolio2:any ;
  closeResult="";
  miPorfolio3:any;
  ha: boolean = false;
  editarSobremi: Sobremi = {datos:""}
  editarTitulos: Titulos = {  titulo:"", titulo1:"", titulo2:"",titulo3:"", titulo4:""}
  editarEducacion: Educacion={  titulo:"",titulo1:"",datos:"",datos1:""};

  constructor( private messageService: MessageService, private http:HttpClient, public datosPorfolio:ServicioService, private modalService: NgbModal, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos1().subscribe(data1 =>{
      this.miPorfolio1 = data1 [0]
    });
  
    this.datosPorfolio.obtenerDatos2().subscribe(data2 =>{
      this.miPorfolio2=data2[0]
    })
  
    this.datosPorfolio.obtenerDatos3().subscribe(data3 =>{
      this.miPorfolio3=data3[0]
    })
  

  }
  
  //SOBRE MI

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
  editarEducacion1(){
    this.datosPorfolio.modificarEducacion(this.editarEducacion).subscribe(data6=>{
      this.datosPorfolio=data6[0];
    })
  }

  borrarSobremi(){
    this.editarSobremi.datos = "";
  }
  borrarEducacion(){
    this.editarEducacion.datos ="";
  }
  borrarEducacion1(){
    this.editarEducacion.datos1="";
  }

 open1(content1:any) {
  this.editarSobremi = this.miPorfolio1
  this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}


  //EDUCACIÓN
  open2(content2:any) {
    this.editarEducacion= this.miPorfolio3
        this.modalService.open(content2, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
  

   private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  //EXPERIENCIA 
  open3(content3:any) {
    this.editarEducacion= this.miPorfolio3
    this.modalService.open(content3, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  ngAfterViewChecked():void{
    if(this.datosPorfolio.mostramelo == true){
      this.ha = true
        console.log("Este está en body y el ha está en :"+this.ha)
      }
    }


}



export interface Educacion {
  titulo:any,
  titulo1:any,
  datos:any,
  datos1:any
  }

  export interface Sobremi {
    datos:any;
  }
  
  export interface Titulos {
    titulo:any;
    titulo1:any,
    titulo2:any,
    titulo3:any,
    titulo4:any
  }