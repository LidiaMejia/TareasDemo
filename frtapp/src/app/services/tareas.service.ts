import { Injectable }  from '@angular/core';
import { HttpClient }  from '@angular/common/http'; //Clase que permite hacer las peticiones http

                                                   /** TIPOS DE DATOS CON LOS MISMOS NOMBRES DE LA BASE!! **/
import { Tarea } from '../types/Tarea';            //Importar Tipo de Dato 'Tarea' para ser más específicos con el código
import { TipoTarea } from '../types/TipoTarea';    //Importar Tipo de Dato 'Tipo de Tarea'

@Injectable({
  providedIn: 'root'
})

export class TareasService 
{
  //Propiedad que almacena la parte que se repite en la URL de la API para tareas
  API_URI = 'http://localhost:3000/api/tareas';

  constructor(private http: HttpClient) { }


  /**** Metodos de Peticiones al Servidor ****/


  //Obtener todas las tareas
  getTareas()
  {
    //Concatenamos con comillas invertidas `` el valor de la variable y el resto de la URL
    return this.http.get<Tarea[]>(`${this.API_URI}/getTareas`);
  }


  //Obtener una tarea expecífica
  //id de tipo string porque todo lo enviado en un form es string
  getTarea(id: string)
  {
    return this.http.get<Tarea>(`${this.API_URI}/getTarea/${id}`);
  }


  //Obtener Tipos de Tarea
  getTipos()
  {
    return this.http.get<TipoTarea[]>(`${this.API_URI}/getTipos`);
  }


  //Agregar Tarea
  addTarea(newTarea: Tarea)
  {
    return this.http.post(`${this.API_URI}/addTarea`, newTarea);
  }


  //Actualizar Tarea
  updateTarea(id: number, tarea: Tarea)
  {
    return this.http.put(`${this.API_URI}/updateTarea/${id}`, tarea);
  }
  

  //Eliminar Tarea
  deleteTarea(id: string)
  {
    return this.http.delete(`${this.API_URI}/deleteTarea/${id}`);
  }
}
