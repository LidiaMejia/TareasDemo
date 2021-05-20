import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; //Para redirigir a tareas-list al guardar y obtener parámetros de Rutas

import { TareasService } from '../../services/tareas.service';
import { Tarea } from '../../types/Tarea';
import { TipoTarea } from '../../types/TipoTarea';

@Component({
  selector: 'app-tareas-form',
  templateUrl: './tareas-form.component.html',
  styleUrls: ['./tareas-form.component.css']
})

export class TareasFormComponent implements OnInit 
{
  //Propiedades
  tipos: TipoTarea[];
  tarea: Tarea;
  edit: boolean;   //Para validar si esta guardando o editando
  action: string;  //Texto en el botón si esta guardando o editando (Mejor experiencia de usuario)

  //Armar fecha de hoy y colocarla en el "min" de la Fecha de la tarea para una mejor visualización
  //Tipo de dato any (Cualquiera) porque se necesita combinar Date, number y string
  hoy: any;
  d: any;
  m: any;
  y: any;

  constructor(private tareasService: TareasService, private router: Router, private activatedRoute: ActivatedRoute)
  {
    //Inicializar datos
    this.edit = false;
    this.action = "Guardar";

    /* Como una mejor práctica, Los datos iniciales se colocaron vacíos y el mostrado inicial de los datos en el form se realizó 
       directamente en el mostrado de datos en la tarjeta de pre-visualización con un condicional ternario */
    this.tarea = {
      id_tarea: 0,
      titulo: "",
      descripcion: "",
      fecha: new Date(),
      id_tipo: 0
    }

    //Crear fecha de hoy
    this.hoy = new Date();
    this.d = this.hoy.getDate();
    this.m = this.hoy.getMonth() + 1; //+1 porque Enero es 0
    this.y = this.hoy.getFullYear();

    //Poner un 0 antes en las fechas de un dígito
    if (this.d < 10) 
    {
      this.d = '0' + this.d;
    }

    if (this.m < 10)
    {
      this.m = '0' + this.m
    }

    this.hoy = this.y + '-' + this.m + '-' + this.d;

    //Colocar fecha de hoy como valor inicial de Fecha de la Tarea
    this.tarea.fecha = this.hoy;
  }

  ngOnInit(): void 
  {
    //Obtener parámetros de la Ruta
    const params = this.activatedRoute.snapshot.params;

    //Si hay un id, trae los datos de esa Tarea de la base y le dice al form que va a editar
    if (params.id) 
    {
      this.edit = true; 
      this.action = "Actualizar";

      this.tareasService.getTarea(params.id).subscribe(
        data => this.tarea = data,
        err  => console.log(err)
      );
    }

    //Obtener Tipos de Tarea para llenar combobox
    this.tareasService.getTipos().subscribe(
      data => this.tipos = data,
      err  => console.log(err)
    );
  }

  guardarTarea()
  {
    //Validaciones
    if(this.tarea.titulo.trim() == "" || this.tarea.fecha < this.hoy || this.tarea.id_tipo == 0)
    {
      alert("ERROR: Debe colocar un Título, una Fecha actual y seleccionar un Tipo de Tarea");
    }
    else
    {
      //En caso de que se desee borrar algún dato para no mandarlo a la base:
      delete this.tarea.id_tarea;
      let insertId: number;

      //Puede devolver la respuesta del servidor o un error
      this.tareasService.addTarea(this.tarea).subscribe(
        res => { 
          console.log(res);
          insertId = parseInt(res.toString());
          console.log("DENTRO: "+insertId);
          this.router.navigate(['/tareas']); //Navegar hacia tareas-list al guardar
        },
        err => console.log(err)
      );
    }
  }

  editarTarea()
  {
    //Validaciones
    if (this.tarea.titulo.trim() == "" || this.tarea.fecha < this.hoy || this.tarea.id_tipo == 0) 
    {
      alert("ERROR: Debe colocar un Título, una Fecha actual y seleccionar un Tipo de Tarea");
    }
    else
    {
      this.tareasService.updateTarea(this.tarea.id_tarea, this.tarea).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/tareas']); //Navegar hacia tareas-list al actualizar
        },
        err => console.log(err)
      );
    }
  }

}
