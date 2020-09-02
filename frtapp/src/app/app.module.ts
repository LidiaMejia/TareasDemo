import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';       //Módulos para activar Routing
import { HttpClientModule }     from '@angular/common/http';  //Para interacción Cliente-Servidor
import { FormsModule }          from '@angular/forms';        //Para Data Binding

import { TareasService } from './services/tareas.service'; //Servicio con los Métodos de solicitudes al servidor en el Backend

import { AppComponent }         from './app.component'; 
import { NavigationComponent }  from './components/navigation/navigation.component';
import { TareasListComponent }  from './components/tareas-list/tareas-list.component';
import { TareasFormComponent }  from './components/tareas-form/tareas-form.component';
import { TareasImgComponent }   from './components/tareas-img/tareas-img.component';

//RUTAS
const routes: Routes = [
  { path: '', redirectTo: '/tareas', pathMatch: 'full' }, //patchMatch full para que busque la ruta completa que coincide con la indicada
  { path: 'tareas', component: TareasListComponent },
  { path: 'tareasform', component: TareasFormComponent },
  { path: 'tareasform/:id', component: TareasFormComponent } //:id significa que tendrá un parámetro
];

@NgModule({
  declarations: [ //Declaración de componentes
    AppComponent,
    NavigationComponent,
    TareasListComponent,
    TareasFormComponent,
    TareasImgComponent
  ],
  imports: [  //Importaciones del propio Angular
    BrowserModule, 
    RouterModule.forRoot(routes), //Se usan todas las rutas
    HttpClientModule,
    FormsModule
  ],
  providers: [TareasService], //Servicios Externos (El Backend en este caso)
  bootstrap: [AppComponent]   //Componente principal cargado al inicio
})

export class AppModule { }

/*  
    Instalación de Bootstrap:
    npm install --save bootstrap jquery popper.js

    - COLOCAR RUTAS A LOS ARCHIVOS EN LA SECCIÓN DE styles y scripts de angular.json
    - PARAR EL SERVIDOR Y REINICIAR SERVICIOS CON ng serve
*/
