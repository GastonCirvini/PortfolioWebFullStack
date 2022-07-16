import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HttpClient} from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ServicioService } from 'src/services/servicio.service';

@Component({
  selector: 'app-hardsofts',
  templateUrl: './hardsofts.component.html',
  styleUrls: ['./hardsofts.component.scss'] ,
  providers: [MessageService]
})
export class HardsoftsComponent implements OnInit {

closeResult="";
  miPorfolio5:any;
  miPorfolio6:any;
  editarSofts1: SoftsHard = { trabajotitulo:"",comunicaciontitulo:"",creatividadtitulo:"",adaptaciontitulo:"",trabajodato:"",comunicaciondato:"",creatividaddato:"",adaptaciondato:"" }
  editarHardSkills:any;
  ha: boolean = false;
  constructor(private messageService: MessageService, private http:HttpClient, public datosPorfolio:ServicioService, private modalService: NgbModal, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.datosPorfolio.modificarHardSkills;
    


    
      this.datosPorfolio.obtenerDatos5().subscribe(data5 =>{
        this.miPorfolio5=data5[0]
      })
      this.datosPorfolio.obtenerDatos6().subscribe(data6 =>{
        this.miPorfolio6=data6[0]
        return data6;
      })
 
  }


  editarHardSkills1(){
    this.datosPorfolio.modificarHardSkills(this.editarHardSkills).subscribe(data7=>{
      this.datosPorfolio=data7[0];
    })
  }

  editarSofts(){
    this.datosPorfolio.modificarHabilidades(this.editarSofts1).subscribe(data5 =>{
      this.datosPorfolio=data5[0];
    })
  }
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

       //SOFT AND HARD SKILLS
  open4(content4:any) {
    this.editarSofts1= this.miPorfolio5
    this.modalService.open(content4, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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



    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
  

    ngAfterViewChecked():void{
      if(this.datosPorfolio.mostramelo == true){
        this.ha = true
          console.log("Este está en body y el ha está en :"+this.ha)
        }
      }


      
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
