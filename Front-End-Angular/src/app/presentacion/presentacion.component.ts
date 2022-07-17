
import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HttpClient} from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ServicioService } from 'src/services/servicio.service';


@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.scss'],
  providers:[MessageService]
})
export class PresentacionComponent implements OnInit {
  miPorfolio:any ;
  miPorfolio7:any;
  ha:boolean =false;
  closeResult= '';

  @ViewChild ('img',{static:true})imgrepresentativa!:ElementRef<HTMLDivElement>;
  
  editarPresentacion: Presentacion = {nombreytitulo:"", nacimiento:"",edad:"",estudios: "",estudios2:"",residencia:"",estudios3:"", estudios4:"",email:""};
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
    alert("¡Imagen de portada actualizada!")
    
    })
    }
    onUpload2(){
      this.datosPorfolio.modificarImagenes(this.editarImagenes).subscribe(data =>{
        console.log("el archivo se subió"+data)
        alert("¡Imagen de perfil actualizada!")
      })
      }
    
    
    onFileChange1(e:any){
      this.editarImagenes.portada = e[0].base64
       console.log(this.editarImagenes.perfil);
     }
     
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

 private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}


 editarPresentacion1(){ 
  this.datosPorfolio.modificarDatos(this.editarPresentacion).subscribe (data =>{
    this.datosPorfolio=data[0]
    console.log(data);
  });    
}


editarImagenes3(){
  this.datosPorfolio.modificarImagenes(this.editarImagenes).subscribe(data =>{
    this.datosPorfolio = data[0];
  })
}


  constructor(private messageService: MessageService, private http:HttpClient, public datosPorfolio:ServicioService, private modalService: NgbModal, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {

      //Presentacion
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.miPorfolio = data[0];
      });
      //Imágenes
      this.datosPorfolio.obtenerDatos7().subscribe(data7=>{
        this.miPorfolio7=data7[0]
      })  
      }

      ngAfterViewChecked():void{
        if(this.datosPorfolio.mostramelo == true){
          this.ha = true
            console.log("Este está en body y el ha está en :"+this.ha)
          }
      this.imgrepresentativa.nativeElement.style.background="url("+this.miPorfolio7.portada+")"
      this.imgrepresentativa.nativeElement.style.backgroundAttachment="fixed"
      this.imgrepresentativa.nativeElement.style.backgroundSize="cover"
      this.imgrepresentativa.nativeElement.style.backgroundRepeat="no-repeat"
      this.imgrepresentativa.nativeElement.style.width="-0 auto"
      this.imgrepresentativa.nativeElement.style.height="400px"
      this.imgrepresentativa.nativeElement.style.paddingTop="600px"
      
    

        }
        borrarPresentacion(){
          this.editarPresentacion.email = "";
          this.editarPresentacion.edad = "";
          this.editarPresentacion.estudios= "";
          this.editarPresentacion.estudios2= "";
          this.editarPresentacion.estudios3= "";
          this.editarPresentacion.estudios4= "";
          this.editarPresentacion.nombreytitulo= "";
          this.editarPresentacion.nacimiento="";
          this.editarPresentacion.residencia= "";
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
  estudios4:any;
  email:any;
  
}


export interface Imagen {
   
  perfil:string
  portada:string
}