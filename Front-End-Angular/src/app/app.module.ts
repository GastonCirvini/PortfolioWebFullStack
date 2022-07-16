import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';
import {ProgressBarModule} from 'primeng/progressbar';
import {ToastModule} from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServicioService } from 'src/services/servicio.service';
import { InterceptorService } from 'src/services/interceptor.service';
import {AlifeFileToBase64Module} from 'alife-file-to-base64';
import {FileUploadModule} from 'primeng/fileupload';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { SobremieducacionComponent } from './sobremieducacion/sobremieducacion.component';
import { HardsoftsComponent } from './hardsofts/hardsofts.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { NavegacionComponent } from './navegacion/navegacion.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import { RoutingModule } from './routing/routing.module';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    PresentacionComponent,
    SobremieducacionComponent,
    HardsoftsComponent,
    ProyectosComponent,
    NavegacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule, AlifeFileToBase64Module,
    NgbModule, NgbPaginationModule, NgbAlertModule, 
    ProgressBarModule, TabMenuModule,
    ToastModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    FileUploadModule,
    NgxSpinnerModule,
    RoutingModule
  ],
  providers: [ServicioService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngbConfig: NgbConfig) {
    ngbConfig.animation = true;
  }
}


