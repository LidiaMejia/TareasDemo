import { Component, OnInit, Input } from '@angular/core'; //Input para recibir información desde una propiedad: [tipo] 

@Component({
  selector: 'app-tareas-img',
  templateUrl: './tareas-img.component.html',
  styleUrls: ['./tareas-img.component.css']
})

export class TareasImgComponent implements OnInit 
{
  //Propiedades
  @Input() tipo: number;

  clase: string;
  icono: string;

  constructor() 
  { 
      //CONSTRUCTOR SOLO PARA ASIGNAR VALOR A LAS VARIABLES
      this.clase = "";
      this.icono = "";
  }

  ngOnInit(): void 
  {

  }

  /**
   * El Evento ngOnInit() solo se ejecuta una vez, por lo que se coloca este Evento que constantemente detecta cambios en 
   * los Inputs del componente para así poder cambiar la imagen de la Tarjeta al escoger un tipo de Tarea.
   * 
   * Y, debido a que se encuentra primero en el Ciclo de Vida de Componentes de Angular, podemos trabajar aquí directamente el mostrado
   * de la imagen cuando se carga en tareas-list.component al iniciar la app
   */
  ngOnChanges()
  {
    switch (this.tipo) 
    {
      case 1:
        this.clase = "imgsalud";
        this.icono = "fas fa-stethoscope";
        break;

      case 2:
        this.clase = "imgtrabajo";
        this.icono = "fas fa-briefcase";
        break;

      case 3:
        this.clase = "imgsocial";
        this.icono = "fas fa-glass-cheers";
        break;
      
      case 4:
        this.clase = "imgcotidiano";
        this.icono = "fas fa-coffee";
        break;

      default:
        this.clase = "imgdefault";
        this.icono = "fas fa-clipboard-list";
        break;
    }
  }

}
