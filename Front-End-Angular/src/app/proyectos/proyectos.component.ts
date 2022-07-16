import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HttpClient} from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ServicioService } from 'src/services/servicio.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
  providers: [MessageService],
})
export class ProyectosComponent implements OnInit {
  editarProyecto: Proyectos = {titulo:"",proyecto:"",proyecto1:"",proyecto2:"", proyecto3:"",proyecto4:"",proyecto5:"", proyecto6:""};
  closeResult="";
  miPorfolio4:any ;
  ha: boolean = false;

  constructor(private messageService: MessageService, private http:HttpClient, public datosPorfolio:ServicioService, private modalService: NgbModal, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos4().subscribe(data4 =>{
      this.miPorfolio4=data4[0]
    })
    this.datosPorfolio.modificarProyecto;
  }

  editarProyecto1(){
    this.datosPorfolio.modificarProyecto(this.editarProyecto).subscribe(data4 =>{
      this.datosPorfolio=data4[0]
    })
  }

  verDatos4(){
    this.datosPorfolio.obtenerDatos4().subscribe(data4 =>{
      this.miPorfolio4=data4[0]
    })
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