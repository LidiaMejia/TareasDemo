import { Component, OnInit } from '@angular/core';
import { TareasService }     from '../../services/tareas.service';
import { Tarea } from '../../types/Tarea';

@Component({
  selector: 'app-tareas-list',
  templateUrl: './tareas-list.component.html',
  styleUrls: ['./tareas-list.component.css']
})

export class TareasListComponent implements OnInit 
{
  //Propiedades de la Clase
  tareas: Tarea[];

  //El servicio se "inyecta" dentro del constructor para crear su instancia y poder utilizarlo posteriormente
  constructor(private tareasService: TareasService){ }

  ngOnInit(): void 
  {
    this.getTareas(); //Cargar Tareas
  }

  getTareas()
  {
    //Invocar método para obtener todas las tareas y almacenarlas en el arreglo para ser utilizadas en el HTML
    //Puede devolver la data o un error
    this.tareasService.getTareas().subscribe(
      data => this.tareas = data,
      err  => console.log(err)
    );
  }

  deleteTarea(id)
  { 
    //Verificar que desea eliminar la Tarea
    if( (confirm("¿Desea eliminar esta Tarea?")) == true)
    {
      this.tareasService.deleteTarea(id).subscribe(
        res => {
          console.log(res); 
          this.getTareas(); //Volver a cargar Tareas 
        },
        err => console.log(err)
      );
    }
  }

}
